const assertEqual = function(actual, expected) {
    if (Array.isArray(actual) && Array.isArray(actual)) {
        if(JSON.stringify(actual) === JSON.stringify(expected)) {
            console.log(`👍👍👍  Assertion Passed: ${actual} === ${expected}`)
    }  else {
        console.log(`👎👎👎  Assertion Failed: ${actual} !== ${expected}`)
         }
    }
    else {
    if (actual === expected) {
        console.log(`👍👍👍  Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`👎👎👎  Assertion Failed: ${actual} !== ${expected}`)
    }
    }
};


module.exports = assertEqual;