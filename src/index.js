import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import TodoList from './TodoList'
import Demo from './Demo'
import { Button } from 'antd';
import { Provider } from 'react-redux'
import store from './store'

// ReactDOM.render(
//   <div>
//     <Button type="primary">Primary1</Button>
//     <Button>Default</Button>
//     <Button type="dashed">Dashed</Button>
//     <Button type="danger">Danger</Button>
//   </div>,
//   document.getElementById('root'));

ReactDOM.render(
  <Provider store={store}>
    <TodoList/>
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
