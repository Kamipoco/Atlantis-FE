const initialState = {
  loading: false,
  name: "",
  slug: "",
  userNFTs: [],
  Allowance: null,
  tokenURIs: null,
  NFTList: null,
  ERC721: null,
  error: false,
  errorMsg: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_DATA_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "CHECK_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        userNFTs: action.payload.userNFTs,
        NFTList: action.payload.NFTList,
        Allowance: action.payload.Allowance,
        tokenURIs: action.payload.tokenURIs,
        ERC721: action.payload.ERC721,
      };
    case "CHECK_DATA_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
