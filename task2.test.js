const reverseString = require('./task2.js');
test('reverseString returns reversed string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
