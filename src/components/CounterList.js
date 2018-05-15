import React from 'react';
import PropTypes from 'prop-types';
import './CounterList.css';
import Counter from './Counter';
import { List } from 'immutable';

const CounterList = ({ counters,onIncrement
                 , onDecrement, onSetColor}) => {
    const counterLists = counters.map(
      (counter,i)=>{
      return <Counter 
              key={i}
              index={i}
              {...counter.toJS()}
              onDecrement={onDecrement}
              onIncrement={onIncrement}
              onSetColor={onSetColor}
              />
    });             

    return (
      <div className="CounterList">
        {counterLists}
      </div>
    )

}

CounterList.propTypes = {
  counters : PropTypes.arrayOf(List),
  onIncrement : PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func,
}
CounterList.defaultProps = {
  counters : [],
  onIncrement : () => console.warn('onIncrement is not defined'),
  onDecrement: () => console.warn('onDecrement is not defined'),
  onSetColor: () => console.warn('onSetColor is not defined'),
}

export default CounterList;