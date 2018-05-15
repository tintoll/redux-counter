import * as types from '../actions/ActionTypes';
import { Map, List } from 'immutable';

// immutable 사용
const initialState = Map({
  counters : List([
    Map({
      color : 'black',
      number :0
    })
  ])
});

function counter(state=initialState, action) {
  const counters = state.get('counters');
  switch (action.type) {
    case types.CRETE:
      return state.set('counters', counters.push(Map({
        color : action.color,
        number : 0
      })))
    case types.REMOVE:
      return state.set('counters', counters.pop());  
    case types.INCREMENT:
      return state.set('counters', counters.update(
        action.index,
        (counter) => counter.set('number', counter.get('number')+1)
      ));
      
    case types.DECREMENT:
      return state.set('counters', counters.update(
        action.index,
        (counter) => counter.set('number', counter.get('number')-1)
      )) 
    case types.SET_COLOR:
      return state.set('counters', counters.update(
        action.index,
        (counter) => counter.set('color', action.color)
      ))   
    default:
      return state;
  }
}

/*
const initialState = {
  counters : [
    {
    color : 'black',
    number : 0
    }
  ]
}

function counter(state = initialState, action) {
  const { counters } = state;

  switch (action.type) {
    case types.CRETE:
      return {
        counters : [
          ...counters,
          {
            color : action.color,
            number : 0
          }
        ]
      }
    case types.REMOVE :
      return {
        counters : counters.slice(0, counters.length - 1)
      }
      
    case types.INCREMENT :
      return {
        counters : [
          ...counters.slice(0,action.index),
          {
            ...counters[action.index],
            number : counters[action.index].number + 1
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      }
    case types.DECREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number - 1
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      }
    case types.SET_COLOR:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            color : action.color
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      }
    default:
      return state;
  }

}
*/
export default counter;





/*
import color from './color';
import number from './number';

import { combineReducers } from 'redux';
*/
/*
    서브 리듀서들을 하나로 합칩니다.
    combineReducers 를 실행하고 나면, 나중에 store의 형태가 파라미터로 전달한 객체의 모양대로 만들어집니다.
    지금의 경우:
    {
        numberData: {
            number: 0
        },
        colorData: {
            color: 'black'
        }
    }
    로 만들어집니다.

const reducers = combineReducers({
  numberData : number,
  colorData : color
});

export default reducers;

*/

/*
// 리듀서는 액션의 type에 따라 변화를 일으키는 함수입니다. 
// 이 리듀서 파일에는 최초변화를 일으키기전, 지니고 있어야할 초기상태가 정의되어야 한다. 
import * as types from '../actions/ActionTypes';
// 초기상태 정의 
const initialState = {
  color : 'black',
  number : 0
}

// 리듀서 함수는 state 와 action 을 파라미터로 가지는 함수이며
// 그 내부에서 switch문을 통하여 action.type에 따라 상태에 다른 변화를 일으켜주면 됩니다.
// 주의할점은, state를 직접 수정하면 절대 안되고, 
// 기존 state 값에 덮어쓴 새 상태객체를 만드는 방식으로 해야합니다.
function counter(state= initialState, action) {
  switch(action.type) {
    case types.INCREMENT:
      return {
        ...state, 
        number : state.number + 1
      };
    case types.DECREMENT: 
      return {
        ...state,
        number : state.number - 1
      }; 
    case types.SET_COLOR:   
      return {
        ...state,
        color: action.color
      };
    default:
      return state;  
  }
}

export default counter;
*/