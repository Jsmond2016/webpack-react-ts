import React from 'react'
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { CombinedState } from '../store/reducers/index';
import { Counter1State } from '../store/reducers/counter1';
import * as types from '../store/action-types';
import { LocationDescriptorObject, LocationState } from 'history'
import { push } from 'connected-react-router'
import { ThunkDispatch } from '../redux-thunk';


const mapStateToProps = (state: CombinedState): Counter1State => state.counter1 
const mapDispatchToProps = (dispatch: ThunkDispatch<CombinedState, Record<string, unknown>, AnyAction>) => ({
  add1(amount: number) {dispatch({type: types.ADD1, payload: amount })},
  add2() {dispatch({type: types.ADD2})},
  goTo(location: LocationDescriptorObject<LocationState>) {
    dispatch(push(location))
  },
  asnycAdd(amount: number) {
    dispatch((dispatch: ThunkDispatch<CombinedState, Record<string, unknown>, AnyAction>, getState: any) => {
      setTimeout(() => {
        dispatch({type: types.ADD1, payload: amount})
      }, 1000)
    })
  }
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

class Counter1 extends React.Component<Props> {

  render () {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={() => this.props.add1(5)}>+5</button>
        <br/>
        <button onClick={() => this.props.add2()}>+2</button>
        <br/>
        <button onClick={() => this.props.goTo({pathname: '/counter2'})}>跳转页面</button>
        <br/>
        <button onClick={() => this.props.asnycAdd(5)}>异步thunk</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter1)