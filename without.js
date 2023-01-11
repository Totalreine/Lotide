const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`👍👍👍  Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`👎👎👎  Assertion Failed: ${actual} !== ${expected}`)
    }
};

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

function without (source, itemsToRemove) {
    let array = []
    for (let i = 0; i < source.length; i++) {
        if(!itemsToRemove.includes(source[i])) {
             array.push(source[i])
        } 
    }
    return array
}

console.log(without([1, 2, 3], [0, 1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, "3", 3])) // => ["1", "2"]

