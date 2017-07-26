// Below are examples of basic strings:
// Note: You can use single quote '' for strings, but it
// is better to use double quotes "" to ensure that extra single quotes dont get entered.

// Here are examples of using strings:

let firstName = "Steffen";
let lastName = "Schmidt";
let introduction = "Hello, my name is " + firstName + " " + lastName + ".";
console.log(introduction);

// In ES6:
let introduction2 = `Hello, my name is ${firstName} ${lastName}.`;
console.log(introduction2);

// Using special characters:
let famousquote = "As we express our gratitude, \nwe must never forget that the highest appreciation is not to utter words, \nbut to live by them."
console.log(famousquote);
