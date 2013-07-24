var utils = require('./utilityMethods.js');
var logger = require("./logger");

exports.bubbleSort = function(arr) {	

	logger.info("Running Bubble sort on Array : " + arr);	

	for(var i = 0 ; i < arr.length -1 ; i++) {
		for(var j = 0 ; j < arr.length -1 - i; j++) {
			if(arr[j] > arr[j+1]) {
				utils.swap(arr, j, j+1)
			}			
		}
	}

	logger.info("Sorted Array : " + arr);

	return arr;
};

exports.selectionSort = function(arr) {

	logger.info("Running Selection sort on Array : " + arr);

	for(var i = 0; i < arr.length; i++)
		utils.swap(arr, arr.length - 1 - i , utils.getMaxIndex(arr.slice(0, arr.length - i)));

	logger.info("Sorted Array : " + arr);
	
	return arr;
};

exports.insertionSort = function(arr) {

	logger.info("Running Insertion sort on Array : " + arr);

	for(var i = 1; i < arr.length ; i++) {
		var value = arr[i];
		for(var j = i-1; j >= 0; j--) {

			if( value < arr[j]) {
				arr[j+1] = arr[j];
				arr[j] = value;
			}			
		}
	}

	logger.info("Sorted Array : " + arr);

	return arr;
};