import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import blockchainReducer from './reducers/blockchainReduce';
import dataReducer from './reducers/dataReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// rootReducer
export const rootReducer = combineReducers({
  blockchain: blockchainReducer,
  data: dataReducer,
});

//rootstate var type
export type RootState = ReturnType<typeof rootReducer>;

// thunk
const middleware = [thunk];
const composeEnhancers = composeWithDevTools(applyMiddleware(...middleware));

//create store
const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

// store
const store = configureStore();

// export store
export default store;
