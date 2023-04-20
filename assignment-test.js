//2. Write a JavaScript function to check whether an input is a date object or not.
var dateFun = function(input) {
	if (Object.prototype.toString.call(input) === '[object Date]') {
		return true;
	}
	return false;
};
console.log(dateFun(new Date('2023/04/20')));
console.log(dateFun('sdfghjkllkjhg'));




//3. Print this series 0,2,5,9,14,20......  upto  60 .
var i = 1;
var newVar = -1;
while (i <= 11) {
	newVar = newVar + i;
	console.log(newVar);
	i++;
}





// 5. write an example that checks weather given date is valid or not and also compare two date and find bigger date.
const MaxValidYear = 9999;
const MinValidYear = 1800;

function isLeapYear(year) {
	if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
		return true;
	}
	return false;
}

function isValidDate(day, month, year) {
	if (year > MaxValidYear || year < MinValidYear) {
		return false;
	}
	if (month < 1 || month > 12) {
		return false;
	}
	if (day < 1 || day > 31) {
		return false;
	}

	if (month == 2) {
		if (isLeapYear(y)) {
			return day <= 29;
		} else {
			return day <= 28;
		}
	}

	if (month == 4 || month == 6 || month == 9 || month == 11) {
		return day <= 30;
	}
	return true;
}
isValidDate(12, 11, 2000) ? console.log(`Valid`) : console.log(`NoValid`);
isValidDate(11, 12, 1700) ? console.log(`Valid`) : console.log(`NoValid`);

//comparing 2 Date , which one is biger?
const date1 = new Date("02/19/2023");
const date2 = new Date("03/14/2023");
if(date1 < date2){
    console.log(`date2 is biger date`);
}
else if( date1 > date2){
    console.log(`date1 is biger date`);
}
else {
    console.log(`date1 and date2 is same!`)
}

