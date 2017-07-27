var x = [];
x.push("First");
x.push("Second");
x.push("Third");
x.pop();
console.log(x);

const y =[];
y.push(88);
console.log(y);

var names = ["Frasier", "Martin", "Niles", "Crane"];
for(i = 0; i < names.length; i++){
  if(names[i].length == 5){
    console.log(names[i]);
  }
}

function yell(string){
 console.log(string.toUpperCase()); // or return string.toUpperCase();
}
yell("hello there");
