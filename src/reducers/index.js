/*
  리듀서는 액션의 type에 따라 변화를 일으키는 함수입니다. 
  이 리듀서 파일에는 최초변화를 일으키기전, 지니고 있어야할 초기상태가 정의되어야 한다. 
*/

import * as types from '../actions/ActionTypes';

// 초기상태 정의 
const initialState = {
  color : 'black',
  number : 0
}
/*
 리듀서 함수는 state 와 action 을 파라미터로 가지는 함수이며
 그 내부에서 switch문을 통하여 action.type에 따라 상태에 다른 변화를 일으켜주면 됩니다.
 주의할점은, state를 직접 수정하면 절대 안되고, 
 기존 state 값에 덮어쓴 새 상태객체를 만드는 방식으로 해야합니다.
*/

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