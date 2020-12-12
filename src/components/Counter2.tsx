import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux';
import { CombinedState } from '../store/reducers/index';
import { Counter2State } from '../store/reducers/counter2';
import * as types from '../store/action-types';

let mapStateToProps = (state: CombinedState): Counter2State => state.counter2
let mapDispatchToProps = (dispatch: Dispatch) => ({
  add3() {dispatch({type: types.ADD3 })},
  add4() {dispatch({type: types.ADD4 })},
  
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

class Counter2 extends React.Component<Props> {

  render () {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={() => this.props.add3()}>+1</button>
        <button onClick={() => this.props.add4()}>+10</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter2)