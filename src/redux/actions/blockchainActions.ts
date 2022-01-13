import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import { AbiItem } from 'web3-utils';
import Web3 from 'web3';
import NFTContract from '../../contract/NFTContract.json';
import OLYMContract from '../../contract/OLYMContract.json';
import GameContract from '../../contract/GameContract.json';
import MarketContract from '../../contract/MarketPlaceContract.json';

declare let window: any;

export const connectRequest = () => {
  return {
    type: 'CONNECTION_REQUEST',
  };
};

export const connectSuccess = (payload: any) => {
  return {
    type: 'CONNECTION_SUCCESS',
    payload: payload,
  };
};

export const connectFailed = (payload: any) => {
  return {
    type: 'CONNECTION_FAILED',
    payload: payload,
  };
};

export const updateAccountRequest = (payload: any) => {
  return {
    type: 'UPDATE_ACCOUNT',
    payload: payload,
  };
};

export const disconnectRequest = (payload: any) => {
  return {
    type: 'DISCONNECT',
    payload: payload,
  };
};

export const connect = () => {
  return async (dispatch) => {
    // init block chain state
    dispatch(connectRequest());

    // check metamask
    if (window.ethereum) {
      let web3 = new Web3(window.ethereum);
      try {
        let accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        const networkId = await window.ethereum.request({
          method: 'net_version',
        });
        const isCorrectNetwork =
          networkId == 4 || networkId == 1 || networkId == 97;

        if (!isCorrectNetwork) {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x61' }],
          });
          accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
          });
        }

        const smartContract = new web3.eth.Contract(
          NFTContract.abi as AbiItem[],
          NFTContract.address,
        );
        const OLYM = new web3.eth.Contract(
          OLYMContract.abi as AbiItem[],
          OLYMContract.address,
        );
        const Game = new web3.eth.Contract(
          GameContract.abi as AbiItem[],
          GameContract.address,
        );
        const MarketPlace = new web3.eth.Contract(
          MarketContract.abi as AbiItem[],
          MarketContract.address,
        );
        const nonce = await web3.eth.getTransactionCount(accounts[0]);
        const address = web3.utils.toChecksumAddress(accounts[0]);

        const url = 'https://stormy-fortress-10422.herokuapp.com/message/send';
        const data = { userWalletAddress: address };
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        response.json().then(async (data) => {
          const signature = await web3.eth.personal.sign(
            data.data,
            address,
            '',
          );
          const verifyData = {
            _userWalletAddress: address,
            _signature: signature,
          };
          const verifyDataUrl =
            'https://stormy-fortress-10422.herokuapp.com/message/verify';
          const response = await fetch(verifyDataUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(verifyData),
          });
          response.json().then((data) => {
            setLocalStorage('jwt', data.data);
            dispatch(
              connectSuccess({
                account: address,
                accounts: accounts,
                web3: web3,
                MarketPlace: MarketPlace,
                smartContract: smartContract,
                OLYMContract: OLYM,
                GameContract: Game,
                jwt: data.data,
              }),
            );
          });
        });
      } catch (err) {
        dispatch(connectFailed(err));
      }
    } else {
      dispatch(connectFailed('Please Install Metamask.'));
    }
  };
};

export const register = (data: object) => {
  return async (dispatch) => {
    // console.log(data)
    const url = `https://stormy-fortress-10422.herokuapp.com/user/generateAccount`;
    const accessToken = getLocalStorage('jwt');
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        console.log('Thành Công');
      })
      .catch((err) => {
        console.log(err);
        console.log('Thất Bại');
      });
  };
};
