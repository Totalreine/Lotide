const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`👍👍👍  Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`👎👎👎  Assertion Failed: ${actual} !== ${expected}`)
    }
};

function findKeyByValue (object, value) {
    let array = Object.keys(object)

    for (const key of array) {
        if(object[key] === value) {
            
            return key
        }
    }

}

module.exports = findKeyByValue