// print numbers 0 -255:
for(var i = 0; i <= 255; i++){
  console.log(i);
}


// print even numbers 1 - 255:
for(var i = 1; i <=255; i++){
  if(i % 2 == 0){
    console.log(i);
  }
}

// pring odd numbers 0 - 255:
for(var i = 1; i <=255; i++){
  if(i % 2 == 0){
    console.log(i);
  }
}


// Write a function that returns the sum of all the odd numbers from 1 to 5000:
function printSum5000(){
  var sum = 0;
  for(var i = 1; i <= 5000; i++){
    sum = sum + i; //or write sum += i;
  }
  console.log(sum); //or: return sum;
}
printSum5000(); // = 12502500


// Write a function that returns the sum of all the values within an array:
function arraySum(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  console.log(sum); // or: return sum;
}
// example test:
arraySum([1,4,2,5]); // = 12

// Given an array, find the maximum value in that array:
function arrayMax(arr){
  var max = arr[0];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  console.log(max); //or: return max;
}
//example test:
arrayMax([1,4,12,5]); // = 12

// Given an array, find the average from the sum of all the values inside that array:
function findAverage(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum = sum + arr[i]; //or: sum += arr[i]
  }
  var avg = sum / arr.length;
  console.log(avg); //or: return avg;
}
//example test:
findAverage([1,7,25,16]) // = 12.25

// push all the odd numbers from 1 - 50 into an array:
function pushArr(){
  var arr = [];
  for(var i = 0; i < 50; i++){
    if(i % 2 == 1){
      arr.push(i);
    }
  }
  console.log(arr); // or: return arr;
}
pushArr();

// Squares. Given an array, square each value in the array and return a new array with those values:
function squareArr(arr){
  var newarr = [];
  for(var i = 0; i < arr.length; i++){
    newarr.push(arr[i]*arr[i]);
  }
  console.log(newarr);
}
//example test:
squareArr([1,2,4,5,10]); // = [1,4,16,25,100]

// Taking in an array, if any of the values of that array are negative, replace with 0:
function negativeValues(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = 0;
    }
  }
  console.log(arr); //or: return arr;
}
// example test:
negativeValues([-4,5,2,-15,8,-100]);

// Given an array with multipule values, find the max, average, and minumum values:
function maxMinAvg(arr){
  var newarr = [];
  var sum = 0;
  var max = arr[0];
  var min = arr[0];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
      if (arr[i] < min){
        min = arr[i];
      }
    }
    sum = sum + arr[i]
  }
  var avg = sum / arr.length;
  newarr.push(max, min, avg);
  console.log(newarr);
}
// example test:
maxMinAvg([-2,5,2,6,-10,20,10]); // = [ 20, -2, 4.428571428571429 ]

// Given an array, if a value in that array is a negative, replace with the word "Negative":
function replaceNegative(arr){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = "Negative"
    }
  }
  console.log(arr);
}
// example test:
replaceNegative([4,-3,5,2,-10,-9]); // = [ 4, 'Negative', 5, 2, 'Negative', 'Negative' ]
