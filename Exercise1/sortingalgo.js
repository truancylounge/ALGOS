var utils = require('./utilityMethods.js');

exports.bubbleSort = function(arr) {

	var length = arr.length, temp;

	console.log("Array to be sorted : " + arr);	


	for(var i = 0 ; i < length -1 ; i++) {
		for(var j = 0 ; j < length -1 - i; j++) {
			if(arr[j] > arr[j+1]) {
				utils.swap(arr, j, j+1)
			}			
		}
	}	

	console.log("Sorted Array : " + arr);	

	return arr;
};