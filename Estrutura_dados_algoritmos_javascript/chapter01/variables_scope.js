var myVariable = 'global';
myOtherVariable = 'global';
let thirdVariable = 'global';

function myFunction () {
	var myVariable = 'local';
	return myVariable;
}

function myOtherFunction() {
	myOtherVariable = 'local';
	return myOtherVariable;
}

function myThirdFunction() {
	let thirdVariable = 'local';
	return thirdVariable;
}
//myFunction
console.log(myVariable);
console.log(myFunction());
console.log(myVariable);

//myOtherFunction
console.log(myOtherVariable);
console.log(myOtherFunction());
console.log(myOtherVariable);

//myThirdFunction
console.log(thirdVariable);
console.log(myThirdFunction())
console.log(thirdVariable)

