import React from 'react';
import ReactDOM from 'react-dom';
// import Calcu from './Calcu';
import { add, subtract, multiply, divide } from './Calcu'
// import {subtract} from './Calcu'
// import {multiply} from './Calcu'
// import {divide} from './Calcu'
import css from './index.css'
ReactDOM.render(
  <>
  <ul>

  <li>The sum of two numbers is {add(20,52)}</li>
  <li>The subtract of two numbers is {subtract(44,20)}</li>
  <li>The multiplication of two numbers is {multiply(44,20)}</li>
  <li>The division of two numbers is {divide(44,3)}</li>
  </ul>
  </>,

document.getElementById("root")
);
