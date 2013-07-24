var utils = require('./utilityMethods.js');
var logger = require("./logger");

exports.binarySearch = function(arr, value) {

	logger.info("Performing Binary Search on array : " + arr);
	logger.info("Value to be searched : " + value);
	var start = 0;
	var end = arr.length -1;

	while(start <= end) {
	
		var mid = Math.floor((start + end)/2);
	
		if(value == arr[mid]) {
			logger.info("Value is present at index : " + mid);
			return mid;
		}

		if(value > arr[mid])
			start = mid + 1;

		if(value < arr[mid])
			end = mid -1;
	}
	logger.info("Value is not present in the array.");
	return -1;
};