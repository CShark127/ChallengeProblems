// First solution - Uses division
// Method: First we calcuate the total product of the provided array.  We then map
//         over the array and return the total product divided by the current element.
function arrayProduct(array) {
	const product = array.reduce((accum, currValue) => accum * currValue, 1);
	return array.map((item) => product / item);
}
