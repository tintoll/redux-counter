import { Map, List } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

// immutable 사용
const initialState = Map({
  counters : List([
    Map({
      color : 'black',
      number :0
    })
  ])
});

// 액션 
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';
export const SET_COLOR = 'counter/SET_COLOR';
export const CREATE = 'counter/CREATE';
export const REMOVE = 'counter/REMOVE';

// 액션생성자
export const create = createAction(CREATE); // color
export const remove = createAction(REMOVE);
export const increment = createAction(INCREMENT); //index
export const decrement = createAction(DECREMENT); //index
export const setColor = createAction(SET_COLOR); //{index, color}

//  리듀서 
export default handleActions({
  [CREATE]: (state,action) => {
    const counters = state.get('counters');
    return state.set('counters', counters.push(Map({
      color : action.payload,
      number : 0
    })));
  },
  [REMOVE]: (state, action) => {
    const counters = state.get('counters');
    return state.set('counters', counters.pop());
  },
  [INCREMENT]: (state, action) => {
    const counters = state.get('counters');
    return state.set('counters', counters.update(
      action.payload,
      (counter) => counter.set('number', counter.get('number')+1)
    ))
  },
  [DECREMENT]: (state, action) => {
    const counters = state.get('counters');
    return state.set('counters', counters.update(
      action.payload,
      (counter) => counter.set('number', counter.get('number') - 1)
    ))
  },
  [SET_COLOR]: (state, action) => {
    const counters = state.get('counters');
    return state.set('counters', counters.update(
      action.payload.index,
      (counter) => counter.set('color', action.payload.color)
    ))
  }
}, initialState);
