// USING THE MATH OBJECT:
// Using Math.floor() and Math.ceil()

// Math.ceil() function returns the smallest integer greater than or equal to a given number.
// Example(s):

var x1 = Math.ceil(1.1); // will return 2.
var y1 = Math.ceil(1.9); // will return 2.
var z1 = Math.ceil(-4.8); // will return -4 (negative number).
console.log(x1);
console.log(y1);
console.log(z1);
// Math.ceil() will ALWAYS round UP a number.

// Math.floor() - function returns the largest integer less than or equal to a given number.
// Examples(s):
var x2 = Math.floor(1.1); // will return 1.
var y2 = Math.floor(1.9); // will return 1.
var z2 = Math.floor(-4.8); // will return -5 (negative number).
console.log(x2);
console.log(y2);
console.log(z2);
// Math.ceil() will ALWAYS round DOWN a number.



// Using Math.trunc() - function returns the integer part of a number by removing any fractional digits.
// Examples:
var x3 = Math.trunc(1.2387); // will return 1.
console.log(x3);

var y3 = Math.trunc(1.9987); // will return 1.
console.log(y3);
// Math.trunc() does NOT round up or down a number with a decimal. It just removes it.


// Using Math.abs() - function returns the absolute value of a number.
// Example(s):
var x4 = Math.abs(-1); // will return 1.
var y4 = Math.abs(-2.53); // will return 2.53.
var z4 = Math.abs(null); // will return 0.
var a4 = Math.abs(''); // will also return 0.
console.log(x4);
console.log(y4);
console.log(z4);
console.log(a4);


// Using Math.round() - function returns the value of a number rounded to the nearest integer.
// Example(s):
var x5 = Math.round(1.49); // will return 1. This is the major difference between Math.Ceil() and Math.Round().
var y5 = Math.round(1.5); // will return 2.
var z5 = Math.round(-1.3); // will return -1.
console.log(x5);
console.log(y5);
console.log(z5);


// Using Math.random() - returns a random number.
// NOTE:
// Example(s):
// Getting a random number (including decimals) in between 0 and 10.
var x6 = Math.random() * 10;
// Getting a whole random number in between 1 and 10.
var y6 = Math.floor(Math.random() * 10) + 1;
// Getting a whole random number in between 0 and 20, but using Math.round() instead of Math.floor().
var z6 = Math.round(Math.random() * 20);
console.log(x6);
console.log(y6);
console.log(z6);



// Using Math.pow(x, y) - returns the value of x to the power of y.
// Example(s):
var x7 = Math.pow(8, 2); // returns 64.
var y7 = Math.pow(4, 6); // returns 4096.
var z7 = Math.pow(9, 4); // returns 6561.
console.log(x7);
console.log(y7);
console.log(z7);


// Using Math.sqrt(x) returns the square root of x.
// Example(s):
var x8 = Math.sqrt(100); // returns 10.
var y8 = Math.sqrt(64); // returns 8.
var z8 = Math.sqrt(7); // returns 2.6457513110645907.
console.log(x8);
console.log(y8);
console.log(z8);



// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
var minimumValue = Math.min(1, -3, 8.35, -6); // returns -6.
var maximumValue = Math.max(0, -2, 27, 9, 0.5) // returns 27.
console.log(minimumValue);
console.log(maximumValue);


// Using Modulous:
// The modulus operator returns the remainder after division.
var xx = 10
var yy = 4
var zz = xx % yy;
console.log(zz); // returns 2.
// Another Example:
let a = 5
console.log(a % 2); // returns 1.
