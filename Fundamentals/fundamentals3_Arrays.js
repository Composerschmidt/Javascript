// Basic examples of arrays and using .push() or .pop():

// Using .push():
var array = [1, 4, [], "Hello"];
array.push("World");
array.push(101);
console.log(array);

// Using .pop():
var array2 = [4, "Delete Value", 44, null];
array2.pop();
console.log(array2);


// Using protype .concat() to bring two arrays together:
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = arr1.concat(arr2);
console.log(arr3);

// Using .shift() - this method removes the first element from an array and returns that element. This method changes the length of the array.
// Example:
var a = ["Delete Me", 5, 2];
var b = a.shift(); // returns the string "Delete Me"
console.log(b);


// Using .join() - this method joins all elements of an array into a string.
// Example:
var c = ['S','T','R','I','N','G'];
var d = c.join('');
var e = c.join('-');
console.log(d);
console.log(e);

// Using .map() - this method creates a new array with the results of calling a provided function on every element in the calling array.
// Example:
var f = [2.24, 4.9, 9.1, 2.52];
var g = f.map(Math.round);
console.log(g);


// Using .filter() - method creates a new array with all elements that pass the test implemented by the provided function.
// Example:
var h = [1, 5, 99, 30];
var lowestnumber = h.filter(function(number){
  return number < 10;
});
console.log(lowestnumber);
