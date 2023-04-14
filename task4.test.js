const capitalize = require('./task4.js');
test('capitalize function capitalizes first letter of string', () => {
  expect(capitalize('hello')).toBe('Hello');
});
