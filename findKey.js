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

module.exports = findKey
