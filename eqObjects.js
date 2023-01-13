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
    

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
console.log(assertEqual(eqObjects(shirtObject , anotherShirtObject), true));

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
console.log(assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false)); 

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false



