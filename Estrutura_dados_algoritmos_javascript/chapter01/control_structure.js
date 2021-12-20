//if
let num1 = 1;
if (num1 === 1) {
	console.log('num is equal to 1');
}

//if else
let num = 0;
if (num === 1) {
	console.log('num is equal to 1');
} else {
	console.log(`num is not equal to 1, the value of num is ${num}.`);
}

if (num === 1) {
	num--;
} else {
	num++;
}

(num == 1) ? num-- : num++;

//else if
const month = 1;
if (month == 1) {
	console.log('January');
} else if (month === 2) {
	console.log('February');
} else if (month === 3) {
	console.log('March');
} else {
	console.log('Month is not January, February or March.');
}

//switch
let day = 7;
switch (day) {
	case 0:
		console.log('Sunday');
		break;
	case 1:
		console.log('Monday');
		break;
	case 2:
		console.log('Tuesday');
		break;
	case 3:
		console.log('Wednesday');
		break;
	case 4:
		console.log('Thursday');
		break;
	case 5:
		console.log('Friday');
		break;
	case 6:
		console.log('Saturday');
		break;
	default:
		console.log('This is an invalid day. Try another one.')
}
