import React from 'react';
import PropTypes from 'prop-types';
import './CounterList.css';
import Counter from './Counter';

const CounterList = ({ counters,onIncrement
                 , onDecrement, onSetColor}) => {
    const counterLists = counters.map(
      (counter,i)=>{
      return <Counter 
              key={i}
              index={i}
              {...counter}
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
  counters : PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number,
    color: PropTypes.string,
  })),
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