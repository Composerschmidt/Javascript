// Old ES5 way
var Dot = function Dot(x, y){
    this.x = x;
    this.y = y;
}
Dot.prototype.showLocation(){
    console.log("This Dot is at x " + this.x + " and y " + this.y);
}
var dot1 = new Dot(55, 20);
dot1.showLocation();
// New ES6 way
class Dot {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    showLocation(){
        // ES6 String Interpolation!
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
    }
}
let dot2 = new Dot(5, 13);
dot2.showLocation();




// class Dot {
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//     // prototype method
//     showLocation(){
//         console.log(`This Dot is at x ${this.x} and y ${this.y}`);
//     }
//     // static method
//     static getHelp(){
//         console.log("This is a Dot class, for created Dots! A Dot takes x and y coordinates, type 'new Dot' to create one!");
//     }
// }
// let dot3 = new Dot(4, 2);
// // we can see showLocation from our instance...
// console.log(dot3.showLocation);
// // but we can't see getHelp
// console.log(getHelp);
// // however we can call getHelp this way:
// Dot.getHelp()
