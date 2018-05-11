/*
    action 객체를 만드는 액션 생성자들을 선언합니다. (action creators)
    여기서 () => ({}) 은, function() { return { } } 와 동일한 의미입니다.
    scope 이슈와 관계 없이 편의상 사용되었습니다.

    모든 액션 객체는 type 이라는 값을 지니고 있어야 합니다
     액션과 함께 전달해야 할 값이 있을경우엔 추가해서 만들어주면 된다.
*/

import * as types from './ActionTypes';

export const increment = () => ({
  type : types.INCREMENT
});

export const decrement = () => ({
  type: types.DECREMENT
});

export const setColor = (color) => ({
  type : types.SET_COLOR,
  color
});

/*
  리덕스의 3가지 원칙중에서 변화는 언제나 순수(Pure)함수로 이뤄져야한다. 
  더블클릭하면 색이 랜덤하게 변하는거지만, 그렇다고 액션을 RANDOMIZE_COLOR로 만들면 안됩니다.
  왜냐하면 랜덤함수는 실행될때마다 다른 값을 반환하기때문에 순수하지 않기때문이다. 
*/