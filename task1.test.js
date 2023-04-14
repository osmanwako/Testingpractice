const stringLength = require('./task1.js');
test('stringLength returns correct length', () => {
  expect(stringLength('hello')).toBe(5);
});
