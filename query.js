
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


