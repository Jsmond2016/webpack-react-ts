import { createStore, applyMiddleware, StoreEnhancer, StoreEnhancerStoreCreator, Store } from 'redux'
import thunk from 'redux-thunk'

let reducers = () => {}

let storeEnhancer: StoreEnhancer = applyMiddleware(thunk)
let storeEnhancerStoreCreator: StoreEnhancerStoreCreator = storeEnhancer(createStore)
let store: Store = storeEnhancerStoreCreator(reducers)


export default store
