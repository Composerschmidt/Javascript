let car = {
    tires: 4,
    spoiler: true,
    accessories: ['antena ball', 'window sticker', 'wheel cover']
};

console.log(car.tires);
console.log(car.spoiler);
console.log(car.accessories[1]);



// Using a iterate through an object using a for-in loop.
// here is an object literal with four key-value pairs
let sandwich = {
    cheese: 'Smoked Gouda',
    meat: 'Dry-aged Bison',
    sauce: 'Chipotle Aioli',
    veggies: 'Caramelized Onions'
}
// the variable 'topping' is used instead of an index
for(let topping in sandwich){
    // when we log 'topping', we notice it's a key
    console.log(topping);
    // when we pass the key to the 'sandwich' object, we can pull values
    console.log(sandwich[topping]);
}
