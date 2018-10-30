import React from 'react';
import ReactDOM from 'react-dom';
import Solver from '../../app/Solver'

// it('unique() returns deduped array', ()=>{
// 	let s = new Solver()
// 	expect(s.unique([1,2,2,3])).toEqual([1,2,3])
// });

// it('getEmptyIndices() returns all empty indices in the array', ()=>{
// 	let s = new Solver()
// 	expect(s.getEmptyIndices(['1','0','2','3','1','2','2','8','6','0'])).toEqual([1,9])
// });


// it('unique() returns deduped array', ()=>{
// 	let s = new Solver()
// 	var bad = ["2", "2", "3", "4", "5", "6", "7", "8", "9", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
// 	var good = ['2', '3','4','5','6','7','8','9','1']
// 	expect(s.unique(bad)).toEqual(good)
// });

// it('getBoxIndices(0) returns indices for first box', ()=>{
// 	let s = new Solver()
// 	expect(s.getBoxIndices(0)).toEqual([0,1,2,9,10,11,18,19,23])
// });

// it('scanRow() returns all possible values in a row', () => {
// 	let s = new Solver()
// 	s.setBoard('011111111111111111111111111111111111111111111111111111111111111111111111111111111')
// 	expect(s.scanRow(0)).toEqual(['2','3','4','5','6','7','8','9'])
// });

// it('scanCol() returns all possible values in a col', () => {
// 	let s = new Solver()
// 	s.setBoard('011111111111111111111111111111111111111111111111111111111111111111111111111111111')
// 	expect(s.scanCol(0)).toEqual(['2','3','4','5','6','7','8','9'])
// });

// it('findPossibleValues() returns one value when only one options available', () => {
// 	let s = new Solver()
// 	s.setBoard('064371259325849761971265843436192587198657432257483916689734125713528694542916378')
// 	expect(s.findPossibleValues(0)).toEqual( ['8'])
// });

// it('getAdjacentCols(9) returns [1,2] as adjacent rows', () => {
// 	let s = new Solver()
// 	expect(s.getAdjacentCols(9)).toEqual( [1,2])
// });

// it('getAdjacentCols(12) returns [4,5] as adjacent rows', () => {
// 	let s = new Solver()
// 	expect(s.getAdjacentCols(12)).toEqual( [4,5])
// });

// it('getAdjacentRows(12) returns [4,5] as adjacent rows', () => {
// 	let s = new Solver()
// 	expect(s.getAdjacentRows(12)).toEqual( [0,2])
// });

// it('getRow(3) returns values of row 3', () => {
// 	let s = new Solver()
// 	s.setBoard('064371259325849761971265843436192587198657432257483916689734125713528694542916378')
// 	expect(s.getRow(3)).toEqual( ["4", "3", "6", "1", "9", "2", "5", "8", "7"])
// });

// it('findPossibleValues() returns one val when there is only one option', () => {
// 	let s = new Solver()
// 	s.setBoard('004371259325849761971265843436192587198657432257483916689734125713528694542916378')
// 	expect(s.findPossibleValues(0))
// 		.toEqual(['8'])
// });

// it('findPossibleValues(54) returns one val when there is only one option', () => {
// 	let s = new Solver()
// 	s.setBoard('864371259325849761971265843436192587198657432257483916089734125713528694542916378')
// 	expect(s.findPossibleValues(54))
// 		.toEqual(['6'])
// });

// it('findPossibleValues() returns two vals when there are two options', () => {
// 	let s = new Solver()
// 	s.setBoard('004371259325849761971265843436192587198657432257483916089734125713528694542916378')
// 	expect(s.findPossibleValues(0))
// 		.toEqual(['6','8'])
// });

// it('fillInividualSquares() only changes the first value when all others are filled in', () => {
// 	let s = new Solver()
// 	s.setBoard('064371259325849761971265843436192587198657432257483916689734125713528694542916378')
// 	s.fillIndividualSquares()
// 	expect(s.getBoard())
// 		.toEqual(['8', '6', '4', '3', '7', '1', '2', '5', '9', '3', '2', '5', '8', '4', '9', '7', '6', '1', '9', '7', '1', '2', '6', '5', '8', '4', '3', '4', '3', '6', '1', '9', '2', '5', '8', '7', '1', '9', '8', '6', '5', '7', '4', '3', '2', '2', '5', '7', '4', '8', '3', '9', '1', '6', '6', '8', '9', '7', '3', '4', '1', '2', '5', '7', '1', '3', '5', '2', '8', '6', '9', '4', '5', '4', '2', '9', '1', '6', '3', '7', '8'])
// });

// it('fillInividualSquares() fixes the first value when there are multiple options', () => {
// 	let s = new Solver()
// 	s.setBoard('004371259325849761971265843436192587198657432257483916089734125713528694542916378')
// 	s.fillIndividualSquares()
// 	expect(s.getBoard())
// 		.toEqual(['8', '6', '4', '3', '7', '1', '2', '5', '9', '3', '2', '5', '8', '4', '9', '7', '6', '1', '9', '7', '1', '2', '6', '5', '8', '4', '3', '4', '3', '6', '1', '9', '2', '5', '8', '7', '1', '9', '8', '6', '5', '7', '4', '3', '2', '2', '5', '7', '4', '8', '3', '9', '1', '6', '6', '8', '9', '7', '3', '4', '1', '2', '5', '7', '1', '3', '5', '2', '8', '6', '9', '4', '5', '4', '2', '9', '1', '6', '3', '7', '8'])
// });

// it('fillInividualSquares() fixes one random missing val in the middle of the board', () => {
// 	let s = new Solver()
// 	s.setBoard('864371259325849761971265843436192587198657432257483916089734125713528694542916378')
// 	s.fillIndividualSquares()
// 	expect(s.getBoard())
// 		.toEqual(['8', '6', '4', '3', '7', '1', '2', '5', '9', '3', '2', '5', '8', '4', '9', '7', '6', '1', '9', '7', '1', '2', '6', '5', '8', '4', '3', '4', '3', '6', '1', '9', '2', '5', '8', '7', '1', '9', '8', '6', '5', '7', '4', '3', '2', '2', '5', '7', '4', '8', '3', '9', '1', '6', '6', '8', '9', '7', '3', '4', '1', '2', '5', '7', '1', '3', '5', '2', '8', '6', '9', '4', '5', '4', '2', '9', '1', '6', '3', '7', '8'])
// });

// it('checkColsOfMultipleSquaresMissingInRows()', () => {
// 	let s = new Solver()
// 	s.setBoard('000371259325849761971265843436192587198657432257483916689734125713528694542916378')
// 	expect(s.checkColsOfMultipleSquaresMissingInRows())
// 		.toEqual(['8', '6', '4', '3', '7', '1', '2', '5', '9', '3', '2', '5', '8', '4', '9', '7', '6', '1', '9', '7', '1', '2', '6', '5', '8', '4', '3', '4', '3', '6', '1', '9', '2', '5', '8', '7', '1', '9', '8', '6', '5', '7', '4', '3', '2', '2', '5', '7', '4', '8', '3', '9', '1', '6', '6', '8', '9', '7', '3', '4', '1', '2', '5', '7', '1', '3', '5', '2', '8', '6', '9', '4', '5', '4', '2', '9', '1', '6', '3', '7', '8'])
// });

// it('checkColsOfMultipleSquaresMissingInRows()', () => {
// 	let s = new Solver()
// 	s.setBoard('804301250325849761971265843436192587198657432257483916689734125713528694542916378')
// 	expect(s.checkColsOfMultipleSquaresMissingInRows())
// 		.toEqual(['8', '6', '4', '3', '7', '1', '2', '5', '9', '3', '2', '5', '8', '4', '9', '7', '6', '1', '9', '7', '1', '2', '6', '5', '8', '4', '3', '4', '3', '6', '1', '9', '2', '5', '8', '7', '1', '9', '8', '6', '5', '7', '4', '3', '2', '2', '5', '7', '4', '8', '3', '9', '1', '6', '6', '8', '9', '7', '3', '4', '1', '2', '5', '7', '1', '3', '5', '2', '8', '6', '9', '4', '5', '4', '2', '9', '1', '6', '3', '7', '8'])
// });

it('checkColsOfMultipleSquaresMissingInRows()', () => {
	let s = new Solver()
	s.setBoard('064371259325849761971265843436192587108607002257483916689734125713528694542916378')
	expect(s.checkColsOfMultipleSquaresMissingInRows())
		.toEqual(['8', '6', '4', '3', '7', '1', '2', '5', '9', '3', '2', '5', '8', '4', '9', '7', '6', '1', '9', '7', '1', '2', '6', '5', '8', '4', '3', '4', '3', '6', '1', '9', '2', '5', '8', '7', '1', '9', '8', '6', '5', '7', '4', '3', '2', '2', '5', '7', '4', '8', '3', '9', '1', '6', '6', '8', '9', '7', '3', '4', '1', '2', '5', '7', '1', '3', '5', '2', '8', '6', '9', '4', '5', '4', '2', '9', '1', '6', '3', '7', '8'])
});























