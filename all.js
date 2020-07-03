function all(arr) {
	// Loop through every item in the array
	for(let i =0; i < arr.length; i++) {
	// If the item evaluates to false, return false
	if (arr[i] == false) {
		return false
	}

}
return true
	
		
	
	// If the loop ends, return true
}

let array1 = [true, false, true]
console.log(all(array1))