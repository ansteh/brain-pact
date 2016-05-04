'use strict';
const pact = require('../index.js');
const assert = require('assert');

let inputOptions = {
  date: {
    type: 'date',
    pattern: ['month', 'week', 'day', 'hour'] //prepare pattern for date
  },
  test: {
    weight: 5 //input property test has maximun value of 5
  }
};
let transition = pact.employ(inputOptions);

let prepared = transition.prepare({ date: Date.now(), test: 4 });
assert.equal(prepared.test, 0.8, "prepared: success");

let reversed = transition.reverse({ test: 0.8 });
assert.equal(reversed.test, 4, "reversed: success");

console.log("All tests have been passed!");
