
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



  // Equality

function eql(arr1,arr2){
  if(arr1.length == arr2.length){
    var newArray = [];
    arr1.forEach((element,index)=>{
      if(element === arr2[index]){
        newArray.push(true);
      } else {
        newArray.push(false);
      }
    })
    
  } else {
    return false;
  }
  return newArray.every(element=>{return element==true});
}

// Count

function count(arr,callback){
	var newArr = [];
	arr.forEach(e => {
		newArr.push(callback(e));
	})

	var t = newArr.filter(i => i == true)
	return t.length
}

// square 

function square(nums) {
  return nums.map(num => num*num)
}

// Add Exclamation

function f(strings) {
  return strings.map(string => string + '!')
}

//Implement uniq

function uniq(arr) {
  var newArr = [];
  arr.forEach(i => {
    if(! newArr.includes(i)){
      newArr.push(i);
    } 
  })
  return newArr;
}

// Fill dynamically

function fillDynamically(value, length) {
  var arr = new Array(length).fill(value)
  return arr
}


