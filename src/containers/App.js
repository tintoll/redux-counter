import React, { Component } from 'react';
import CounterListContainer from './CounterListContainer';
import Buttons from '../components/Buttons';
import * as actions from '../actions';
import {getRandomColor} from '../utils';
import {connect} from 'react-redux';
class App extends Component {

  render() {
    const {onCreate, onRemove} = this.props;
    return (
      <div>
        <Buttons onCreate={onCreate}
                onRemove={onRemove}
                />
        <CounterListContainer />
      </div>
    );
  }
}

const mapDistpatchToProps = (dispatch) => ({
  onCreate : () => {
    const color = getRandomColor();
    dispatch(actions.create(color));
  },
  onRemove : () => dispatch(actions.remove())
})

export default connect(null, mapDistpatchToProps)(App);
