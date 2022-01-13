const initialState = {
  loading: false,
  account: null,
  accounts: null,
  smartContract: null,
  OLYMContract: null,
  GameContract: null,
  MarketPlace: null,
  web3: null,
  errorMsg: "",
  jwt: "",
};

const blockchainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONNECTION_REQUEST":
      return {
        ...initialState,
        loading: true,
      };
    case "CONNECTION_SUCCESS":
      return {
        ...state,
        loading: false,
        account: action.payload.account,
        accounts: action.payload.accounts,
        smartContract: action.payload.smartContract,
        OLYMContract: action.payload.OLYMContract,
        GameContract: action.payload.GameContract,
        MarketPlace: action.payload.MarketPlace,
        web3: action.payload.web3,
        jwt: action.payload.jwt,
      };
    case "CONNECTION_FAILED":
      return {
        ...initialState,
        loading: false,
        errorMsg: action.payload,
      };
    case "UPDATE_ACCOUNT":
      return {
        ...state,
        account: action.payload.account,
      };
    case "DISCONNECT":
      return initialState;
    default:
      return state;
  }
};

export default blockchainReducer;
