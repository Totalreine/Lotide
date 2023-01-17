const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    console.log(results)
    return results;
  }

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

function x (arg) {
 return arg.length
}

let result = map(words, x)
console.log(result)

module.exports = map
  