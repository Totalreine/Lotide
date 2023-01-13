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

const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect; 
    let result = eqObjects(actual, expected) 

    if (result === true) {
        console.log(`👍👍👍  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
    } else {
        console.log(`👎👎👎  Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`)
    }
  };

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject));