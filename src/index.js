import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ClassComp from './ClassComp';
import Ch9_ClickEvent from './Ch9_ClickEvent';
import Ch10StateFuncComp from './Ch10StateFuncComp';
import Ch11ClassCompState from './Ch11ClassCompState';

import reportWebVitals from './reportWebVitals';




ReactDOM.render(
  <React.StrictMode>
    <App/>
    {/* <ClassComp/> */}
    {/* <Ch9_ClickEvent/> */}
    {/* <Ch10StateFuncComp/> */}
    {/* <Ch11FuncCompState/> */}
  
   
     
  </React.StrictMode>,
  document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
