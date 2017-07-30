var x = function(j){
  this.i = 0;
  this.j = j;
}

x.prototype.getJ = function(){
    return this.j;
}

var x1 = new x(1);
var x2 = new x(2);

console.log(x1.getJ())
console.log(x2.getJ())
