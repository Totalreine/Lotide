const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`👍👍👍  Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`👎👎👎  Assertion Failed: ${actual} !== ${expected}`)
    }
};


function head(array) {
    let first = array.shift()
    return first
}

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
