import { createContext, useMemo, FC, useContext } from 'react';
import {
  IResponseMetadata,
  EnumNFTType,
  EnumClass,
  EnumRarity,
  EnumRace,
} from 'src/types';
import { IGenesisFilters } from './types';

import { useLoadItems } from './helpers';
import useGenesisReducer from './reducer';

const DEFAULT_FILTERS: IGenesisFilters = {
  nftClass: undefined,
  rarity: undefined,
  race: undefined,
  stars: undefined,
};

interface IContextProps {
  nftType: EnumNFTType;
  filters: IGenesisFilters;
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

const GenesisContext = createContext<IContextProps>({
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

export const GenesisContextProvider: FC = ({ children }) => {
  const {
    state: { nftType, filters, page, limit },
    setFilterClass,
    setFilterStars,
    setFilterRace,
    setFilterRarity,
    setNFTType,
    setPage,
  } = useGenesisReducer();

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
    <GenesisContext.Provider value={contextValue}>
      {children}
    </GenesisContext.Provider>
  );
};

export const useMarkerplaceContext = () => useContext(GenesisContext);
