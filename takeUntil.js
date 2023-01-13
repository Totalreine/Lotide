function eqArrays (array1, array2) {
    let r = ""

    for (let i = 0; i < array1.length; i++) {
        if(array1[i] !== array2[i]) {
             return false
        } else {
            r = true
        }
    }
    return r
}

function assertArraysEqual (one, two) {
   
  let result = eqArrays(one, two) 

  if (result === true) {
      console.log(`👍👍👍  Assertion Passed`)
  } else {
      console.log(`👎👎👎  Assertion Failed`)
  }
}

const cb = (arg) => {
     if (arg === 0) {
        return true
     } 
}

const takeUntil = function(array, callback) {
    let r = []
    for(i = 0; i < array.length; i++) {
            r.push(array[i])
            if(callback(array[i])) {
                return r
            }
            
        } 
}

console.log(takeUntil([3,6,8,2,5,8,0,1,5,4,7,6,4],cb))