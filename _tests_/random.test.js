const { TestWatcher } = require('@jest/core');
const checkIfEqual = require('../lib/random.js');

TestWatcher('checks if 10 is equal to 10', () => {
  expect(checkIfEqual(10,10)).toBe(true);
});