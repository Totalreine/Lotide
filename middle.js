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

const middle = function(array) {
    let array2 = []
    let x = array.length/2
    let y = Math.ceil(x)

    if(array.length % 2 === 0 && array.length !== 2) {
        array2.push(array[x-1], array[x])
    } else if (array.length % 2 === 1 && array.length !== 1) {
        array2.push(array[y-1])
    }
     return array2

}
    
 
  