var sortingalgo = require('../sortingalgo.js');

var assert = require("assert")


describe("InsertionSort", function() {
	
	describe('empty array', function() {
		it('sorting an empty array', function() {
			var arr = [];
			sortingalgo.insertionSort(arr);
			assert.deepEqual(arr, [], 'Failed empty array test.');
		})

	})

	describe('single element array', function() {
		it('sorting a single element array', function() {
			var arr = [2];
			sortingalgo.insertionSort(arr);			
			assert.deepEqual(arr, [2], 'Failed single element array test.');
		})
	})	

	describe('sorting multiple element array', function() {
		it('sorting all element in array should pass', function() {
			var arr = [4, 2, 1, 8, 20, 10];
			sortingalgo.insertionSort(arr);
			assert.deepEqual(arr, [1, 2, 4, 8, 10, 20], 'Failed to sort all elements in array.');
		})
	})
})