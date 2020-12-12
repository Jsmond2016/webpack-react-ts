import { combineReducers, ReducersMapObject, Reducer, AnyAction } from "redux";
import counter1, { Counter1State } from "./counter1";
import counter2, { Counter2State } from "./counter2";
import user, { UserState } from './user'
import { connectRouter, RouterState } from "connected-react-router";
import history from "../../history";
export interface CombinedState {
  counter1: Counter1State;
  counter2: Counter2State;
  user: UserState;
  router: RouterState;
}

const reducers: ReducersMapObject<CombinedState, any> = {
  counter1,
  counter2,
  user,
  router: connectRouter(history),
};

// export type CombineState = {
//  [key in keyof typeof reducers]:  ReturnType<typeof reducers[key]>
// }

const reducer: Reducer<CombinedState, AnyAction> = combineReducers(reducers);
export default reducer;
