import * as types from '../action-types'
import { AnyAction } from 'redux'

export interface Counter2State {
  number: number
}

let initialState: Counter2State = {
  number: 0
}

export default function (state: Counter2State = initialState, action: AnyAction): Counter2State {
  switch (action.type) {
    case types.ADD3:
      return { number: state.number + 1 }
    case types.ADD4:
      return { number: state.number + 10 }
    default: 
      return state
  }
}