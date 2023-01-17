/*const assertEqual = require("../assertEqual")
const tail = require('../tail');

assertEqual(tail([4,7,2]),[7,2])*/

  
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });
  it("returns ['7','9','5'] for ['5','7','9','5']", () => {
    assert.deepEqual(tail(['5','7','9','5']), ["7","9","5"]); 
  });
});