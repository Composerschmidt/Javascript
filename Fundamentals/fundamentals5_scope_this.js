// the naming convention for Classes and Object Constructors is that they're capitalized and singular
// function Person(name, age){
//     var privateVariable = "This variable is private";
//     var privateMethod = function(){
//         console.log(this);
//     }
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//     }
// }
// var eliza = new Person("Eliza", 48);
// console.log(eliza.privateVariable);
// this will put out 'undefined!'


// Below is an example of how we can access private methods inside the object constructor (Person):

function Person(name, age){
    var privateVariable = "This variable is private";
    var privateMethod = function(){
        console.log(this);
    }
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
        // we can access our attributes within the constructor!
        console.log("Also my privateVariable says: " + privateVariable)
        // we can access our methods within the constructor!
        privateMethod();
    }
}
var Steffen = new Person("Steffen", 28);
Steffen.greet();
