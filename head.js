const assertEqual = require("./assertEqual")
const head = function (array) {
    let first = array.shift()
    return first
}

module.exports = head
