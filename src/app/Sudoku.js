import React, { Component } from 'react';
import Board from './Board'

class Sudoku extends Component {

	constructor(props){
		super(props);
		this.state = {
			squares: Array(81).fill(undefined),
			boxIndices: [0,3,6,27,30,33,54,57,60],
			bgColors: Array(81).fill("white"),
		};

		this.changeSquareValue(0,"1");
		this.changeSquareValue(9,"2");
		this.changeSquareValue(18,"3");
		this.changeSquareValue(27,"4");
		this.changeSquareValue(36,"5");
		this.changeSquareValue(45,"6");
		this.changeSquareValue(54,"7");
		this.changeSquareValue(63,"8");
		this.changeSquareValue(72,"9");
		this.changeSquareValue(80,"7");
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
			// console.log(temp)
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
			if(temp[i] !== undefined){
				for (var j = i+1; j <=8; j++) {	
					if(temp[j] !== undefined){
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

  render() {
  	const s = this.state.squares;
  	const bg = this.state.bgColors;


    return (
      <div >
        <Board onChange={this.changeSquareValue.bind(this)} squares={s} bgColors={bg}/>
      </div>
    );
  }
}

export default Sudoku;
