import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Sudoku from './app/Sudoku'
import Solver from './app/Solver'
import * as serviceWorker from './serviceWorker';

var elem = (
		<Sudoku/>
)
ReactDOM.render(elem, document.getElementById('root'));
// ReactDOM.render(<Content />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
