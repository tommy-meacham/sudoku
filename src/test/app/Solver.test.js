import React from 'react';
import ReactDOM from 'react-dom';
import Solver from '../../app/Solver'

it('returns deduped array', ()=>{
	let s = new Solver()
	expect(s.unique([1,2,2,3])).toEqual([1,2,3])
});

it('returns deduped array', ()=>{
	let s = new Solver()
	var bad = ["2", "2", "3", "4", "5", "6", "7", "8", "9", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
	var good = ['2', '3','4','5','6','7','8','9','1']
	expect(s.unique(bad)).toEqual(good)
});

it('returns box indices', ()=>{
	let s = new Solver()
	expect(s.getBoxIndices(0)).toEqual([0,1,2,9,10,11,18,19,23])
});

it('only returns possible values in a row', () => {
	let s = new Solver()
	s.setBoard('111111111111111111111111111111111111111111111111111111111111111111111111111111111')
	expect(s.scanRow(0)).toEqual(['2','3','4','5','6','7','8','9'])
});

it('only returns possible values in a col', () => {
	let s = new Solver()
	s.setBoard('211111111111111111111111111111111111111111111111111111111111111111111111111111111')
	expect(s.scanCol(0)).toEqual(['3','4','5','6','7','8','9'])
});

it('return the number 2', () => {
	let s = new Solver()
	s.setBoard('103456789000000000000000000000000000000000000000000000000000000000000000000000000')
	expect(s.findPossibleValues(0)).toEqual( ['2', '3','4','5','6','7','8','9','1'])
});



