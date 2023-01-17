
const assertArraysEqual = require("./assertArraysEqual")

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

module.exports = middle
    
 
  