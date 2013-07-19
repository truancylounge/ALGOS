exports.randomArrayGenerator = function(size) {
	var arr = []

	while(arr.length < size){
		var randomnumber=Math.ceil(Math.random()*100)
		var found=false;
		for(var i=0;i<arr.length;i++){
			if(arr[i]==randomnumber){
				found=true;
				break
			}
		}

  		if(!found)arr[arr.length]=randomnumber;
	}

	return arr;	

};

exports.swap = function(arr, index1, index2) {
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp
};