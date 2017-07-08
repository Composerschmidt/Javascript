// Convert number to reversed array of digits:
function digitize(n) {
  var number = n;
  var arr = [];
  var numberToString = number.toString();
  for(var i = 0; i < numberToString.length; i++){
    arr.push(+numberToString.charAt(i));
  }
  arr.reverse();
  console.log(arr);
}

digitize(12345)

// example test:
// 348597 => [7,9,5,8,4,3]


// Given an array of values equaling either true of false, count how many true values are present (aka - sheep...haha):
function countSheeps(arrayOfSheep) {
  var totalsheep = 0;
  for(var i = 0; i < arrayOfSheep.length; i++){
    if(arrayOfSheep[i] == true){
      totalsheep = totalsheep + 1;
    }
  }
  return totalsheep;
  console.log(totalsheep);
}
// example test:
countSheeps([true, false, false, true, false, false]); // => 2

//Given a string, find the shortest word (number of characters):
function findShort(s){
  var wordarr = s.split(" ");
  var min = wordarr[0];
  for(var i = 0; i < wordarr.length; i++){
    if(wordarr[i].length < min.length){
      min = wordarr[i];
    }
  }
  console.log(min.length); // or: return min.length;
}
findShort("Hello There my name is Steffen Schmidt"); // => 2
