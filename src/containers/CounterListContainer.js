import React from 'react';
import * as actions from '../module';
import { connect } from 'react-redux';
import {getRandomColor} from '../utils';
import CounterList from '../components/CounterList';

const mapStateToProps = (state) => ({
    counters : state.get('counters')
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement : (index) => dispatch(actions.increment(index)),
  onDecrement: (index) => dispatch(actions.decrement(index)),
  onSetColor: (index) => {
    const color = getRandomColor();
    dispatch(actions.setColor({index, color}));
  }
});

const CounterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);

export default CounterListContainer;