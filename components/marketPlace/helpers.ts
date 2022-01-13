import { useEffect, useState } from 'react';
import Web3 from 'web3';
import useSWR from 'swr';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { promiseWrapper } from 'src/utils/common';
import { AbiItem } from 'web3-utils';
import { RootState } from 'src/redux/store';
import NFTContract from 'src/contract/NFTContract.json';
import { IMarketplaceFilters } from './types';
import { EnumNFTType } from 'src/types';

const host = 'https://stormy-fortress-10422.herokuapp.com';

interface IParams {
  page?: number;
  limit?: number;
  nftType: EnumNFTType;
  filters: IMarketplaceFilters;
}

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const processFilters = (filters: IMarketplaceFilters) => {
  const { nftClass, ...rest } = filters;
  const renamed = {
    class: nftClass,
    ...rest,
  };
  return Object.fromEntries(
    Object.entries(renamed).filter(([, value]) => typeof value !== undefined),
  );
};

const getEndpoint = (nftType: EnumNFTType) => {
  switch (nftType) {
    case EnumNFTType.Hero: {
      return `${host}/market/heroes`;
    }
    case EnumNFTType.Weapon: {
      return `${host}/market/weapons`;
    }
    case EnumNFTType.Armor: {
      return `${host}/market/armors`;
    }
    default: {
      throw new Error('Invalid nftType');
    }
  }
};

export const useLoadItems = ({
  page = 1,
  limit = 12,
  nftType,
  filters,
}: IParams) => {
  const blockchain = useSelector((state: RootState) => state.blockchain);
  const accessToken = blockchain.jwt;

  const processed = processFilters(filters);
  const query = qs.stringify({
    page,
    limit,
    ...processed,
  });
  const { data, error, isValidating } = useSWR(
    `${getEndpoint(nftType)}?${query}`,
    (key) => {
      return fetch(key, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }).then((res) => res.json());
    },
  );

  return {
    isLoading: typeof data === 'undefined',
    isValidating,
    list: data?.data,
    metadata: data?.metadata,
    error,
  };
};

export const useLoadDataFromContract = (tokenId: number) => {
  const [link, setLink] = useState<string>();

  const { data, error, isValidating } = useSWR(link, (key) =>
    fetch(key).then((res) => res.json()),
  );

  useEffect(() => {
    let web3 = new Web3(window.ethereum);
    const ERC721 = new web3.eth.Contract(
      NFTContract.abi as AbiItem[],
      NFTContract.address,
    );
    ERC721.methods
      .tokenURI(tokenId)
      .call()
      .then(setLink)
      .catch((error) => {
        console.error('Fail to load link', error);
      });
  }, [tokenId]);
  return {
    data,
    error,
    isLoading: typeof data === 'undefined',
    isValidating,
  };
};
