calcIndex() {
	var inputTemp = document.querySelector("#tempInput");
	var outputIndex = document.querySelector("#result");
	var inputRelhum = document.querySelector("#relhumInput");
	var temp = inputTemp.value;
	var relhum = inputrelhum;
	var index =  -42.379 + 2.04901523 * temp + 10.14333127 * relhum - 0.22475541 * temp * relhum
	- 0.00683783 * temp^2 - 0.05481717 * relhum^2 + 0.00122874 * temp^2 * relhum + 0.00085282 * temp
	* relhum^2 - 0.00000199 * temp2 * relhum^2;
	
	outputIndex.innerHTML = "The heat index is " + index + "."
	}