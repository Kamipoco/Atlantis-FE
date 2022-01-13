import { createContext, useMemo, FC, useContext } from 'react';
import {
  IResponseMetadata,
  EnumNFTType,
  EnumClass,
  EnumRarity,
  EnumRace,
} from 'src/types';
import { IMarketplaceFilters } from './types';

import { useLoadItems } from './helpers';
import useMarketplaceReducer from './reducer';

const DEFAULT_FILTERS: IMarketplaceFilters = {
  nftClass: undefined,
  rarity: undefined,
  race: undefined,
  stars: undefined,
};

interface IContextProps {
  nftType: EnumNFTType;
  filters: IMarketplaceFilters;
  isValidating: boolean;
  isLoading: boolean;
  list: Array<any> | undefined;
  metadata: IResponseMetadata | undefined;
  setFilterStars: (stars: number) => void;
  setFilterClass: (nftClass: EnumClass) => void;
  setFilterRace: (race: EnumRace) => void;
  setFilterRarity: (rarity: EnumRarity) => void;
  setNFTType: (nftType: EnumNFTType) => void;
  error: any;
  setPage: (page: number) => void;
  page: number;
}

const MarketplaceContext = createContext<IContextProps>({
  nftType: EnumNFTType.Hero,
  filters: DEFAULT_FILTERS,
  isValidating: false,
  isLoading: false,
  list: undefined,
  metadata: undefined,
  setFilterClass: () => undefined,
  setFilterStars: () => undefined,
  setFilterRace: () => undefined,
  setFilterRarity: () => undefined,
  setNFTType: () => undefined,
  error: undefined,
  setPage: () => undefined,
  page: 1,
});

export const MarketplaceContextProvider: FC = ({ children }) => {
  const {
    state: { nftType, filters, page, limit },
    setFilterClass,
    setFilterStars,
    setFilterRace,
    setFilterRarity,
    setNFTType,
    setPage,
  } = useMarketplaceReducer();

  const { list, metadata, isLoading, error, isValidating } = useLoadItems({
    nftType,
    filters,
    page,
    limit,
  });

  const contextValue = useMemo(
    () => ({
      nftType,
      filters,
      list,
      metadata,
      isValidating,
      isLoading,
      setFilterStars,
      setFilterClass,
      setFilterRace,
      setFilterRarity,
      setNFTType,
      error,
      setPage,
      page,
    }),
    [
      nftType,
      filters,
      list,
      metadata,
      isValidating,
      isLoading,
      setFilterStars,
      setFilterClass,
      setFilterRace,
      setFilterRarity,
      setNFTType,
      error,
      setPage,
      page,
    ],
  );

  return (
    <MarketplaceContext.Provider value={contextValue}>
      {children}
    </MarketplaceContext.Provider>
  );
};

export const useMarkerplaceContext = () => useContext(MarketplaceContext);
