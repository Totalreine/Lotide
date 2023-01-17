
const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });
  it("returns [4,9,2,4,7,0] for [8,4,9,2,4,7,0]", () => {
    assert.deepEqual(tail([8,4,9,2,4,7,0]), [4,9,2,4,7,0]); 
  });

});

