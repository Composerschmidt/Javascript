function arrOne(){
x = [3,5,"Dojo","rocks","Michael","Sensei"];
  for(var i = 0; i < x.length; i++){
  console.log(x[i]);
  }
 x.push(100);
var newarr = ["hello","world","JavaScript is Fun"];
  for(var i = 0; i < newarr.length; i++){
  x.push(newarr[i]);
 }
console.log(x);
}
arrOne();


function ninjaConstructor(name){
  var ninja = {
    name: name,
    cohort: "Jan2017",
    belt_level: "YellowBelt",
    level_up: function(){
      if(ninja.belt_level=="YellowBelt"){
        ninja.belt_level = "RedBelt";
      }
      if(ninja.belt_level=="RedBelt"){
        ninja.belt_level = "BlackBelt";
      }
      if(ninja.belt_level=="BlackBelt"){
        console.log("You are at the highest belt level.")
      }
      console.log(ninja.belt_level+" is your current belt level.");
    }
  }
  return ninja;
}

var newninja = ninjaConstructor("Steffen")
console.log(newninja);
newninja.level_up();

function personConstructor(name){
  var person = {
    name: name,
    distance_traveled: 0,
    say_name: function() {
      console.log(name);
    },
    say_something: function(){
      console.log(person.name+" says I am cool");
    },
    walk: function(){
      console.log(person.name+" is walking");
      person.distance_traveled += 3;
    },
    run: function(){
      console.log(person.name+" is running");
      person.distance_traveled += 10;
    },
    crawl: function(){
      console.log(person.name+" is crawling");
      person.distance_traveled += 1;
    }
  }
  return person;
}
var Phil = personConstructor("Phil");
console.log(Phil);
Phil.run();
