const eqArrays = require("./eqArrays") 

function assertArraysEqual (one, two) {
   
    let result = eqArrays(one, two) 

    if (result === true) {
        console.log(`👍👍👍  Assertion Passed ${one} === ${two}`)
    } else {
        console.log(`👎👎👎  Assertion Failed ${one} !== ${two}`)
    }
}

module.exports = assertArraysEqual