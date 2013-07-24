var searchingalgo = require('../searchingalgo.js');

var assert = require("assert")


describe("BinarySearch", function() {	

	describe('searching an empty array', function() {
		it('searching an empty array', function() {
			assert.equal(searchingalgo.binarySearch([], 6), -1, 'Failed to perform binary search.');
		})
	})
	
	describe('searching multiple elements in an array', function() {
		it('searching an array with multiple elements', function() {						
			assert.equal(searchingalgo.binarySearch([1, 2, 5, 7, 9], 9), 4, 'Failed to perform binary search.');
			assert.equal(searchingalgo.binarySearch([1, 2, 5, 7, 9], 7), 3, 'Failed to perform binary search.');
			assert.equal(searchingalgo.binarySearch([1, 2, 5, 7, 9], 5), 2, 'Failed to perform binary search.');
			assert.equal(searchingalgo.binarySearch([1, 2, 5, 7, 9], 2), 1, 'Failed to perform binary search.');
			assert.equal(searchingalgo.binarySearch([1, 2, 5, 7, 9], 1), 0, 'Failed to perform binary search.');
			assert.equal(searchingalgo.binarySearch([1, 2, 5, 7, 9], 10), -1, 'Failed to perform binary search.');
			assert.equal(searchingalgo.binarySearch([1, 2, 5, 7, 9], 6), -1, 'Failed to perform binary search.');
		})
	})
})