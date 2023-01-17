const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`👍👍👍  Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`👎👎👎  Assertion Failed: ${actual} !== ${expected}`)
    }
};

function eqArrays (array1, array2) {
    let r = ""
    if (array1 === undefined || array2 === undefined) {
        return false
    } else {
        for (let i = 0; i < array1.length; i++) {
            if(array1[i] !== array2[i]) {
                return false
            } else {
                r = true
            }
        }
        return r
    }
    
}

const eqObjects = function(object1, object2) {
    let c = true

    for (const key of Object.keys(object1)) {

        if(Array.isArray(object1[key]) || Array.isArray(object2[key])) {
            let c = eqArrays(object1[key], object2[key])
            
            if(c === false) {return false}
            
        } else {

            if(!Object.keys(object2).includes(key) || 
            Object.keys(object1).length !== Object.keys(object2).length || 
            object1[key] !== object2[key]) {
            return false

            } 

        }
            
    
    }
    return true
}
    
module.exports = eqObjects

