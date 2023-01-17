const assertEqual = require("./assertEqual")

function eqArrays (array1, array2) {
    let r = ""
    if(array1.length === 0 && array2.length === 0){
        return true
    }
    for (let i = 0; i < array1.length; i++) {
        if(array1[i] !== array2[i]) {
             return false
        } else {
            r = true
        }
    }
    return r
}

module.exports = eqArrays