
// Empty

function isEmpty(arr) {
    if(arr.length == 0){
      return true;
       } else {
      return false;  
     }
  }

//Element access
function at(arr, i) {
    var l = arr.length;
    if( i >= l | i < 0){
      return null;
    } else {
      return arr[i];
    }
  }

//Element assignment
  function f(nums) {
    if(nums[1] == 0){
          return null;
       } else {
          nums[1] = 0;
         return nums;
       }
  }



// Get first element
  function takeFirst(arr, n) {
    if( n == 0){
      return [] ;
    } else if(n > arr.length) {
      return arr;
    } else {
      return arr.slice(0,n)
    }
  }


// Copy array
  function copyArray(array) {
    if(true){
      return array.slice();
    } else {
      return array;
    }
      
  }