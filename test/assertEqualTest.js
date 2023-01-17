
/*const assertEqual = require('../assertEqual');

assertEqual(6,6) */

const assert = require('chai').assert;
const assertEqual = require('../assertEqual')

describe("#assertEqual", () => {
  it("returns 6 for 6", () => {
    assert.strictEqual(assertEqual(6, 6));
  });
  it("returns ['5','6'] for ['5','6']", () => {
    assert.strictEqual(assertEqual(['5','6'], ['5','6'])); 
  });
});
