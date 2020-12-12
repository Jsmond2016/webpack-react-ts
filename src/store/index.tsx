import {
  createStore,
  applyMiddleware,
  StoreEnhancer,
  StoreEnhancerStoreCreator,
  Store,
} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { routerMiddleware } from 'connected-react-router'
import history from '../history';


const storeEnhancer: StoreEnhancer = applyMiddleware(thunk, routerMiddleware(history));
const storeEnhancerStoreCreator: StoreEnhancerStoreCreator = storeEnhancer(
  createStore
);
const store: Store = storeEnhancerStoreCreator(reducer);

export default store;
