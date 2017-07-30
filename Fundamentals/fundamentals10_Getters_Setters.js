// Getters get a specific attribute. Setters set the value of a specific attribute.
// Example:
class Pizza {
    constructor(radius, slices){
        this.radius = radius;
        this._slices = slices;
    }
    get slices (){
        return this._slices;
    }
    set slices (slices){
        this._slices = slices;
    }
};

// The following example features custom getters:
class Circle{
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    get diameter(){
        return this.radius * 2;
    }
}
let circle1 = new Circle(1, 2, 5);
console.log(circle1.diameter);
