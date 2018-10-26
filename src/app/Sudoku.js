import React, { Component } from 'react';
import Board from './Board'
import Solver from './Solver'

class Sudoku extends Component {

	constructor(props){
		super(props);

		// var testCase = '004300209005009001070060043006002087190007400050083000600000105003508690042910300'
		var testCase = '864371259325849761971265843436192587198657432257483916689734125713528694542916378'

		var temp = Array(81).fill(0);
		for(var i=0;i<81;i++){
			temp[i] = testCase[i]
		}

		this.state = {
			squares:temp,
			boxIndices: [0,3,6,27,30,33,54,57,60],
			bgColors: Array(81).fill("white"),
		};
	}

	solve(){
		let solver = new Solver();
		solver.setBoard(this.state.squares);

		var temp = this.state.squares
		var solved = solver.solve();

		for(var i=0;i<81;i++){
			this.changeSquareValue(i,solved[i])
		}

	}

	changeSquareValue(index, value){
		var current = this.state.squares;
		if(value == ''){
			current[index] = undefined;	
		}else {
			current[index] = value;
		}

		this.setState({
			squares: current
		});
		// console.log(this.state.squares)
		this.checkBoard();
	}

	checkBoard(){
		var faulty = [];
		this.changeBgColor([...Array(81).keys()],"white");
		
		

		for(var i = 0; i<=8;i++){
	  		var validRow = this.isRowValid(i);
	  		var validCol = this.isColumnValid(i);
	  		var validBox = this.isBoxValid(i);

	  		if(!validRow){
	  			faulty = faulty.concat(this.selectFaultyRowIndices(i));
	  		}
	  		if(!validCol){	  			
	  			faulty = faulty.concat(this.selectFaultyColumnIndices(i));
	  		}
	  		if(!validBox){
	  			faulty = faulty.concat(this.selectFaultyBoxIndices(i));
	  		}

	  		this.changeBgColor(faulty, "red");
  		}	
	}

	isRowValid(i){
		var temp = undefined;
		var valid = true;
		if(i <= 9 & i >=0){
			const startIndex = i*9;
			const endIndex = i*9 + 9;

			temp = this.state.squares.slice(startIndex,endIndex);
		}
		return this.itemsAreAllDifferent(temp);
	}

	isColumnValid(i){
		var temp = Array(9).fill(undefined);
		if(i <= 9 & i >=0){
			var stateIndex = 0;
			for (var j = 0; j <=8; j++) {
				stateIndex = 9*j+i;
				temp[j] = this.state.squares[stateIndex];
			}
		}
		return this.itemsAreAllDifferent(temp);
	}

	isBoxValid(i){
		var temp = Array(9).fill(undefined);
		if(i <= 9 & i >=0){
			var stateIndex = 0;
			var boxStart = this.state.boxIndices[i];
			var j = 0;
			for (var row = 0; row <=2; row++) {
				for (var column = 0; column <=2; column++) {
					stateIndex = boxStart+(9*row+column);
					temp[j] = this.state.squares[stateIndex];
					j++
				}
			}
	
		}
		return this.itemsAreAllDifferent(temp);
	}

	itemsAreAllDifferent(temp){
		var allDifferent = true;
		for (var i = 0; i <=8; i++) {
			if(temp[i] !== undefined & temp[i] !== 0){
				for (var j = i+1; j <=8; j++) {	
					if(temp[j] !== undefined & temp[j] != 0){
						if((temp[i] != temp[j]) == 0){
							allDifferent = false;
						}
					}
				}
			}
		}
		return allDifferent;
	}

	selectFaultyRowIndices(i) {
		var temp = Array(9).fill(undefined);
		if(i <= 9 & i >=0){
			var startIndex = i*9;
			for(var j = 0; j<=8;j++){
				temp[j] = startIndex + j;
			}
		}
		// console.log(temp)
		return temp;
	}

	selectFaultyColumnIndices(i) {
		var temp = Array(9).fill(undefined);
		if(i <= 9 & i >=0){
			var stateIndex = 0;
			for (var j = 0; j <=8; j++) {
				stateIndex = 9*j+i;
				temp[j] = stateIndex;
			}
		}
		return temp;
	}

	selectFaultyBoxIndices(i) {
		var temp = Array(9).fill(undefined);
		if(i <= 9 & i >=0){
			var stateIndex = 0;
			var boxStart = this.state.boxIndices[i];
			var j = 0;
			for (var row = 0; row <=2; row++) {
				for (var column = 0; column <=2; column++) {
					stateIndex = boxStart+(9*row+column);
					temp[j] = stateIndex;
					j++
				}
			}
		}
		return temp;
	}

	changeBgColor(temp, color){
		// console.log(temp)
		for(var i = 0; i<=temp.length;i++){
			this.state.bgColors[temp[i]] = color;
		}
	}	

	handleClick() {
		this.solve();
	}

	getBoxIndex(index) {
		if(this.state.box0.includes(index)){
			return 0;
		} else if(this.state.box1.includes(index)){
			return 1;
		} else if(this.state.box2.includes(index)){
			return 2;
		} else if(this.state.box3.includes(index)){
			return 3;
		} else if(this.state.box4.includes(index)){
			return 4;
		} else if(this.state.box5.includes(index)){
			return 5;
		} else if(this.state.box6.includes(index)){
			return 6;
		} else if(this.state.box7.includes(index)){
			return 7;
		} else if(this.state.box8.includes(index)){
			return 8;
		} else {
			return undefined;
		}
	}



  render() {
  	const s = this.state.squares;
  	const bg = this.state.bgColors;
    return (
      <div >
        <Board onChange={this.changeSquareValue.bind(this)} squares={s} bgColors={bg}/>
        <button onClick={this.handleClick.bind(this)}>Solve</button>
      </div>
    );
  }
}

export default Sudoku;
