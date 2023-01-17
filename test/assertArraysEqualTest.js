  
const assert = require('chai').assert;
const assertArraysEqual   = require('../assertArraysEqual');

describe("#assertArraysEqual ", () => {
    it("returns [1, 2, 3] for [1, 2, 3]", () => {
      assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
    });
     it("returns [] for []", () => {
      assert.deepEqual(assertArraysEqual([], [])); 
    });
  
  });