const eqArrays = require("./eqArrays") 

function assertArraysEqual (one, two) {
   
    let result = eqArrays(one, two) 

    if (result === true) {
        console.log(`👍👍👍  Assertion Passed`)
    } else {
        console.log(`👎👎👎  Assertion Failed`)
    }
}
console.log(assertArraysEqual([1,2,3], [1,2,3]))
module.exports = assertArraysEqual