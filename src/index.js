import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// redux 관련
import { createStore } from 'redux';
import reducers from './module';
import { Provider } from 'react-redux';

/*
  Store는 리덕스에서 가장 핵심적인 인스턴스입니다.
  이 안에 현재 상태를 내장하고 있고, 구독(subscribe)중인 함수들이 
  상태가 업데이트 될때마다 다시 실행되게 해줍니다.
*/
// Store 생성
// Redux Devtools 사용하기 위해서 추가해야할 부분
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'));
registerServiceWorker();
