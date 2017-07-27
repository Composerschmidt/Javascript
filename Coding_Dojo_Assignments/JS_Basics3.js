function zero_negativity(arr){
  var result = true;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      result = false;
    }
  }
  console.log(result);
}

zero_negativity([0, -5, 9]);



function is_even(number){
  if(number % 2 == 0){
    console.log(true);
  }
  else{
    console.log(false);
  }
}

is_even(2);


function how_many_even(arr){
  var count = 0;
  for(i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        count += 1;
    }
  }
  console.log(count);
}

how_many_even([2,4,6,7]);


function create_dummy_array(n){
  var newarr = [];
  for(var i = 0; i < n; i++){
    newarr.push(Math.round(Math.random() * 9));
  }
  console.log(newarr);
}

create_dummy_array(4);
