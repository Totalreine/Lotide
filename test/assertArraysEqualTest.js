/*
const eqArrays = require("../eqArrays")

console.log(eqArrays([1,2,3,4], [1,2,4,4])) */

const assert = require('chai').assert;
//const eqArrays = require("../eqArrays")
const assertArraysEqual = require("../assertArraysEqual")

describe("#assertArraysEqual", () => {
  it("returns [1,2,3,4] for [1,2,3,4]", () => {
    assert.deepEqual(assertArraysEqual([1,2,3,4], [1,2,3,4]));
  });
  it("returns [] for []", () => {
    assert.deepEqual(assertArraysEqual([], [])); 
  });
});