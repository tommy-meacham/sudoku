import React, { Component } from 'react';
import Sudoku from './Sudoku'

class Solver {

	constructor(props) {
		this.state = {
			squares:Array(81).fill(0),
			box0:[0,1,2,9,10,11,18,19,23],
			box1:[3,4,5,12,13,14,21,22,23],
			box2:[6,7,8,15,16,17,24,25,26],
			box3:[27,28,29,36,37,38,45,46,47],
			box4:[30,31,32,39,40,41,48,49,50],
			box5:[33,34,35,42,43,44,51,52,53],
			box6:[54,55,56,63,64,65,72,73,74],
			box7:[57,58,59,66,67,68,75,76,77],
			box8:[60,61,62,69,70,71,78,79,80],
		};
	}

	setBoard(board) {
		for(var i = 0; i<board.length;i++){
			this.state.squares[i] = board[i];
		}
	}

	solve() {
		for(var i = 0;i<81;i++){
			var currentSquare = this.state.squares[i]
			if(currentSquare == '0'){
				var possibleVals = this.findPossibleValues(i)
				if(possibleVals.length === 1){
					this.state.squares[i] = possibleVals[0]
				} else {
					for(var val in possibleVals){
						var row_1 = Math.floor(i/9) + 1
						var row_2 = Math.floor(i/9) + 2
						var col_1 = Math.floor(i%9) + 1
					}
				}
			}
		}
		return this.state.squares
	}

	findPossibleValues(index) {
		const squareValue = this.state.squares[index]
		const row = Math.floor(index/9)
		const col = Math.floor(index%9)
		var possibleVals = []
		possibleVals = possibleVals.concat(this.scanRow(row))
		possibleVals = possibleVals.concat(this.scanCol(col))
		possibleVals = possibleVals.concat(this.scanBox(index))
		return this.unique(possibleVals)

	}

	scanRow(row) {
		const rowVals = this.state.squares.slice(row,row+9);
		var possibleVals = ['1','2','3','4','5','6','7','8','9']
		return possibleVals.filter(val => !rowVals.includes(val))
	}

	scanCol(col) {
		var colVals = Array(9).fill(undefined);
		if(col <= 9 & col >=0){
			var stateIndex = 0;
			for (var j = 0; j <=8; j++) {
				stateIndex = 9*j+col;
				colVals[j] = this.state.squares[stateIndex];
			}
		}
		var possibleVals = ['1','2','3','4','5','6','7','8','9']
		return possibleVals.filter(val => !colVals.includes(val))
	}

	scanBox(boxIndex){
		var box = this.getBoxIndices(boxIndex)
		var boxVals = Array(9).fill(undefined)
		for(var i in box){
			boxVals[i] = this.state.squares[i]
		}
		var possibleVals = ['1','2','3','4','5','6','7','8','9']
		return possibleVals.filter(val => !boxVals.includes(val))

	}

	unique(array) {
		var dedup = []
		for(var i =0; i<array.length;i++){
			for(var j = i+1;j<array.length;j++){
				if(array[i] != array[j] & !dedup.includes(array[i])){
					dedup.push(array[i])
				}
			}
		}
		if(!dedup.includes(array[array.length-1])){
			dedup.push(array[array.length-1])
		}
		return dedup
	}

	getAdjacentCols(index){
		var startIndices = ['0','3','6']
		var middleIndices = ['1','4','7']
		var endIndices = ['2','5','8']
		var col = Math.floor(index%9) / 9
		var position;
		if((col+'').split('.').length === 1){
			position = (col+'').split('.')[0]
		}else{
			position = (col+'').split('.')[1][0]
		}

		if(startIndices.includes(position)){
			return [Math.floor(index%9)+1,Math.floor(index%9)+2]
		}else if(middleIndices.includes(position)){
			return [Math.floor(index%9)-1,Math.floor(index%9)+1]
		}else if(endIndices.includes(position)){
			return [Math.floor(index%9)-1,Math.floor(index%9)-2]
		}
	}

	getAdjacentRows(index){
		var startIndices = [0,3,6]
		var middleIndices = [1,4,7]
		var endIndices = [2,5,8]
		var row = Math.floor(index/9)

		if(startIndices.includes(row)){
			return [row+1,row+2]
		}else if(middleIndices.includes(row)){
			return [row-1,row+1]
		}else if(endIndices.includes(row)){
			return [row-1,row-2]
		}
	}

	getBoxIndices(index) {
		if(this.state.box0.includes(index)){
			return this.state.box0;
		} else if(this.state.box1.includes(index)){
			return this.state.box1;
		} else if(this.state.box2.includes(index)){
			return this.state.box2;
		} else if(this.state.box3.includes(index)){
			return this.state.box3;
		} else if(this.state.box4.includes(index)){
			return this.state.box4;
		} else if(this.state.box5.includes(index)){
			return this.state.box5;
		} else if(this.state.box6.includes(index)){
			return this.state.box6;
		} else if(this.state.box7.includes(index)){
			return this.state.box7;
		} else if(this.state.box8.includes(index)){
			return this.state.box8;
		} else {
			return undefined;
		}
	}
}

export default Solver;