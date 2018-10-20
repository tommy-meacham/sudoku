import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Sudoku from './app/Sudoku'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Content />, document.getElementById('root'));
ReactDOM.render(<Sudoku squares={Array(81).fill(undefined)} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
