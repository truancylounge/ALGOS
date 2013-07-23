var utils = require('./utilityMethods.js');

exports.bubbleSort = function(arr) {	

	console.log("Running Bubble sort on Array : " + arr);	


	for(var i = 0 ; i < arr.length -1 ; i++) {
		for(var j = 0 ; j < arr.length -1 - i; j++) {
			if(arr[j] > arr[j+1]) {
				utils.swap(arr, j, j+1)
			}			
		}
	}	

	console.log("Sorted Array using Bubble sort algo : " + arr);	

	return arr;
};

exports.selectionSort = function(arr) {

	console.log("Running Selection sort on Array : " + arr);

	for(var i = 0; i < arr.length; i++) {
		var maxIndex = utils.getMaxIndex(arr.slice(0, arr.length - i));
		utils.swap(arr, arr.length - 1 - i , maxIndex);
	}

	console.log("Sorted Array using Selection sort algo : " + arr);	
	return arr;


};