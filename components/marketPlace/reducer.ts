import { useReducer, useCallback } from 'react';
import { IMarketplaceFilters } from './types';
import { EnumNFTType, EnumClass, EnumRace, EnumRarity } from 'src/types';

interface IState {
  nftType: EnumNFTType;
  filters: IMarketplaceFilters;
  page: number;
  limit: number;
}

interface IAction {
  type: string;
  payload: any;
}

const DEFAULT_FILTERS = {
  nftClass: undefined,
  stars: undefined,
  race: undefined,
  rarity: undefined,
};

const DEFAULT_STATE: IState = {
  nftType: EnumNFTType.Hero,
  filters: DEFAULT_FILTERS,
  page: 1,
  limit: 12,
};

const filtersReducer = (
  state: IMarketplaceFilters,
  action: IAction,
): IMarketplaceFilters => {
  const { filter, value } = action.payload;
  return {
    ...state,
    [filter]: value,
  };
};

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'setNFTType': {
      return {
        ...DEFAULT_STATE,
        nftType: action.payload,
      };
    }
    case 'setPage': {
      return {
        ...state,
        page: action.payload,
      };
    }
    case 'setLimit': {
      return {
        ...state,
        page: 1,
        limit: action.payload,
      };
    }
    case 'setFilter': {
      return {
        ...state,
        page: 1,
        filters: filtersReducer(state.filters, action),
      };
    }
    default: {
      return state;
    }
  }
};

const useMarketplaceReducer = (initialState: IState = DEFAULT_STATE) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setNFTType = useCallback(
    (nftType: EnumNFTType) =>
      dispatch({ type: 'setNFTType', payload: nftType }),
    [],
  );
  const setPage = useCallback(
    (page: number) => dispatch({ type: 'setPage', payload: page }),
    [],
  );
  const setLimit = useCallback(
    (limit: number) => dispatch({ type: 'setLimit', payload: limit }),
    [],
  );
  const setFilterStars = useCallback(
    (stars: number) =>
      dispatch({
        type: 'setFilter',
        payload: { filter: 'stars', value: stars },
      }),
    [],
  );
  const setFilterClass = useCallback((nftClass: EnumClass) => {
    dispatch({
      type: 'setFilter',
      payload: { filter: 'nftClass', value: nftClass },
    });
  }, []);
  const setFilterRarity = useCallback((rarity: EnumRarity) => {
    dispatch({
      type: 'setFilter',
      payload: { filter: 'rarity', value: rarity },
    });
  }, []);
  const setFilterRace = useCallback((race: EnumRace) => {
    dispatch({
      type: 'setFilter',
      payload: { filter: 'race', value: race },
    });
  }, []);

  return {
    state,
    setNFTType,
    setPage,
    setLimit,
    setFilterStars,
    setFilterClass,
    setFilterRace,
    setFilterRarity,
  };
};

export default useMarketplaceReducer;
