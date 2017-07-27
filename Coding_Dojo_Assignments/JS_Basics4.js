function star_string(num){
  let new_str = "";
  for(let i = 0; i<num; i++){
    new_str += "*";
  }
  return new_str;
};


get_stars(8);

function draw_stars(arr){
  let new_arr = [];
  for(let i = 0; i<arr.length; i++){
    if(typeof arr[i] === 'number'){
      new_arr.push(star_string(arr[i]))
    }else if(typeof arr[i] === 'string'){
      let new_str = "";
      for(let j = 0; j < arr[i].length; j++){
        new_str += arr[i][0].toLowerCase();
      }
      new_arr.push(new_str);
    }
  }
  return new_arr;
}

drawStars([4,2,5]);
