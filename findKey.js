const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`👍👍👍  Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`👎👎👎  Assertion Failed: ${actual} !== ${expected}`)
    }
};

const cb = (arg) => {
    if(arg == 1) {
        return true
    } else {
        return undefined
    }
    
}


function findKey (object, callback) {
    let array = Object.keys(object)
    
   for(let i = 0; i < array.length; i++) {
        if(cb(object[array[i]])) {
            return array[i]
        }
        
   }
    
}

console.log(findKey({a: 3, b: 2, c: 3, d: 0, e: 1, f: 6},cb))
