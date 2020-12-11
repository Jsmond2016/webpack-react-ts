import { combineReducers, ReducersMapObject, Reducer, AnyAction, CombinedState } from 'redux';
import counter1, { Counter1State } from './counter1';
import counter2, { Counter2State } from './counter2';


interface Reducers {
  counter1: Counter1State
  counter2: Counter2State
}


let reducers: ReducersMapObject<Reducers, AnyAction> = {
  counter1,
  counter2
}

let reducer: Reducer<CombinedState<S>, A>  = combineReducers(reducers)