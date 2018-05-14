/* 
 Action 의 종류들을 선언합니다.
 앞에 export 를 붙임으로서, 나중에 이것들을 불러올 때, 
 import * as types from './ActionTypes' 를 할 수 있어요.
*/

// 액션을 선언할때 대문자로 선언을 합니다.
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_COLOR = 'SET_COLOR';

export const CRETE = 'CREATE';
export const REMOVE = 'REMOVE';