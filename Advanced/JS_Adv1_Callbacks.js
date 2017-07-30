// Using NOW and LATER:
// Example using setTimeout, a JavaScript function that delays the execution of a function by a set timeout:
var warrior = 'Steffen';
setTimeout( function (){ console.log(warrior); }, 2000 );
console.log(warrior);

//The following example using callbacks for making pasta.

function makePasta(pasta, makeSauce) {
  console.log("Boiling water");
  console.log("Putting " + pasta + " pasta in the water");
  // create a variable for sauce!
  var sauce = makeSauce();          // invoke makeSauce, our callback
  console.log("Mixing sauce");
  console.log("Pasta is done!");
  return pasta + " Pasta with " + sauce + " sauce! Voila!";
}
function makePesto() {
  console.log("Making Pesto");
  return "pesto";
}
function makeAlfredo() {
  console.log("Making Alfredo");
  return "alfredo";
}
// we pass the whole makePesto recipe to makePasta!
console.log(makePasta("Penne", makePesto));
// notice lack of parentheses after makePesto.
// Remember: we want to pass the function, not execute it and pass a return value.
console.log(makePasta("Farfalle", makeAlfredo));

//Note: When we pass the function as an argument into the makePasta function call,
// we don’t put parenthesis after “makePesto,” because we actually want to pass the
// function definition, or the list of instructions, rather than execute the
// function (which would just pass whatever the function returns).
