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


const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))

  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  