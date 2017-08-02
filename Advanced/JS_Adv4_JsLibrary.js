var _ = {
   map: function(arr, callback) {
     var newArr = [];
     for(var i = 0; i < arr.length; i++){
      var value = callback(arr[i]);
      newArr.push(value);
     }
     return newArr;
   },
   reduce: function() {
     // code here;
   },
   find: function() {
     // code here;
   },
   filter: function() {
     // code here;
   },
   reject: function() {
     // code here;
   }
 }
// you just created a library with 5 methods!

console.log(_.map[1, 2, 3], function(num){ return num * 3; })
