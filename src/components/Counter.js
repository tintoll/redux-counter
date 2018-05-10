import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';



const Counter = ({ number, color, onIncrement
                 , onDecrement, onSetColor}) => {
    return (
      <div className="Counter"
           onClick={onIncrement}
           onContextMenu={
             (e) => {
               // onContextMenu는 마우스 오른쪽 버튼 클릭에대한 이벤트이다.
               // 우클릭으로 메뉴가 열리는데 이벤트 방지를 해서 메뉴가 열리지 않습니다.
               e.preventDefault(); 
               onDecrement();
             }
           }
           onDoubleClick={onSetColor}
           style={{backgroundColor: color}}
        >
        {number}
      </div>
    )
 }
Counter.propTypes = {
  number : PropTypes.number,
  color : PropTypes.string,
  onIncrement : PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func,
}

Counter.defaultProps = {
  number : 0,
  color : 'black',
  onIncrement : () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onDecrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined'),
}
 export default Counter;
