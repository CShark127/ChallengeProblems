// First solution - Uses division
// Method: First we calcuate the total product of the provided array.  We then map
//         over the array and return the total product divided by the current element.
function arrayProduct(array) {
	const product = array.reduce((accum, currValue) => accum * currValue, 1);
	return array.map((item) => product / item);
}

// arrayProduct([1, 2, 3, 4, 5]) == [120, 60, 40, 30, 24]
// arrayProduct([3, 2, 1]) == [2, 3, 6]
