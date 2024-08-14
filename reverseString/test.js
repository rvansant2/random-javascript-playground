const { reverseStringSimple, reverseStringWithLoop, reverseStringRecursive } = require('./reverseString');

test('reverseStringSimple empty string passed in', () => {
  expect(reverseStringSimple('')).toEqual('');
});

test('reverseStringSimple hello string passed in', () => {
  expect(reverseStringSimple('hello')).toEqual('olleh');
});

test('reverseStringWithLoop empty string passed in', () => {
  expect(reverseStringWithLoop('')).toEqual('');
});

test('reverseStringWithLoop hello string passed in', () => {
  expect(reverseStringWithLoop('hello')).toEqual('olleh');
});

test('reverseStringRecursive empty string passed in', () => {
  expect(reverseStringRecursive('')).toEqual('');
});

test('reverseStringRecursive hello string passed in', () => {
  expect(reverseStringRecursive('hello')).toEqual('olleh');
});

