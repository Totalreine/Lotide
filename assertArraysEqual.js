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

assertArraysEqual([1,2,3,4,5],[1,2,3,4,5])