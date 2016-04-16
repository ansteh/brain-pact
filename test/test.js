'use strict';
const pact = require('../index.js');

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
console.log(prepared);

let reversed = transition.reverse({ test: 0.8 });
console.log(reversed);
