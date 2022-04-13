const {minus, sum} = require('../functions');

test('minus 2 - 1 to equal 1', () => {
  expect(minus(2, 1)).toBe(1);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});