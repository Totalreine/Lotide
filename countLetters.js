const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`👍👍👍  Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`👎👎👎  Assertion Failed: ${actual} !== ${expected}`)
    }
};

function countLetters (sentence) {
    let list = {}
    
    for (const letter of sentence) {
        
        if(list[letter]) {
            list[letter] += 1
        } else {
            list[letter] = 1
        }
    }
    
    return list
}

console.log(countLetters("holla"))
