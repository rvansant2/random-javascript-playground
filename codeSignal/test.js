const centuryFromYear = require('./index').centuryFromYear;
const largestAdjacentProduct = require('./index').largestAdjacentProduct
const consecutiveArray = require('./index').consecutiveArray;
const commonCharacterCount = require('./index').commonCharacterCount;
const sortByHeight = require('./index').sortByHeight;
const reverseInParthenses =  require('./index').reverseInParthenses;

// Tests for centuryFromYear
test('centuryFromYear passed in 1905', () => {
  expect(centuryFromYear(1905)).toEqual(20);
});

test('centuryFromYear passed in 1700', () => {
  expect(centuryFromYear(1700)).toEqual(17);
});

test('centuryFromYear passed in 1988', () => {
  expect(centuryFromYear(1988)).toEqual(20);
});

test('centuryFromYear passed in 2000', () => {
  expect(centuryFromYear(2000)).toEqual(20);
});

test('centuryFromYear passed in 2001', () => {
  expect(centuryFromYear(2001)).toEqual(21);
});

// Tests for largestAdjacentProduct
test('largestAdjacentProduct passed in [3, 6, -2, -5, 7, 3]', () => {
  expect(largestAdjacentProduct([3, 6, -2, -5, 7, 3])).toEqual(21);
});

test('largestAdjacentProduct passed in [-1, -2]', () => {
  expect(largestAdjacentProduct([-1, -2])).toEqual(2);
});

test('largestAdjacentProduct passed in [5, 1, 2, 3, 1, 4]', () => {
  expect(largestAdjacentProduct([5, 1, 2, 3, 1, 4])).toEqual(6);
});

test('largestAdjacentProduct passed in [1, 2, 3, 0]', () => {
  expect(largestAdjacentProduct([1, 2, 3, 0])).toEqual(6);
});

// Tests for consecutiveArray
test('consecutiveArray passed in [6, 2, 3, 8]', () => {
  expect(consecutiveArray([6, 2, 3, 8])).toEqual(3);
});

test('consecutiveArray passed in [0, 3]', () => {
  expect(consecutiveArray([0, 3])).toEqual(2);
});

test('consecutiveArray passed in [5, 4, 6]', () => {
  expect(consecutiveArray([5, 4, 6])).toEqual(0);
});

test('consecutiveArray passed in [6, 3]', () => {
  expect(consecutiveArray([6, 3])).toEqual(2);
});

test('consecutiveArray passed in [1]', () => {
  expect(consecutiveArray([1])).toEqual(0);
});


// Tests for commonCharacterCount
test('commonCharacterCount passed in s1: "aabcc", s2: "adcaa"', () => {
  expect(commonCharacterCount('aabcc', 'adcaa')).toEqual(3);
});

test('commonCharacterCount passed in s1: "zzzz", s2: "zzzzzzz"', () => {
  expect(commonCharacterCount('zzzz', 'zzzzzzz')).toEqual(4);
});

test('commonCharacterCount passed in s1: "abca", s2: "xyzbac"', () => {
  expect(commonCharacterCount('abca', 'xyzbac')).toEqual(3);
});

// Tests for sortByHeight
test('sortByHeight passed in a: [-1, 150, 190, 170, -1, -1, 160, 180]', () => {
  expect(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])).toEqual([-1, 150, 160, 170, -1, -1, 180, 190]);
});

test('sortByHeight passed in a: [-1, -1, -1, -1, -1]', () => {
  expect(sortByHeight([-1, -1, -1, -1, -1])).toEqual([-1, -1, -1, -1, -1]);
});

test('sortByHeight passed in a: [4, 2, 9, 11, 2, 16]', () => {
  expect(sortByHeight([4, 2, 9, 11, 2, 16])).toEqual([2, 2, 4, 9, 11, 16]);
});

test('sortByHeight passed in a: [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]', () => {
  expect(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3])).toEqual([1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]);
});

// Tests for reverseInParthenses

test('reverseInParthenses passed in a: "(bar)"', () => {
  expect(reverseInParthenses("(bar)")).toEqual('rab');
});

test('reverseInParthenses passed in a: "foo(bar)baz"', () => {
  expect(reverseInParthenses("foo(bar)baz")).toEqual('foorabbaz');
});

test('reverseInParthenses passed in a: "foo(bar)baz(blim)"', () => {
  expect(reverseInParthenses("foo(bar)baz(blim)")).toEqual('foorabbazmilb');
});

test('reverseInParthenses passed in a: "foo(bar(baz))blim"', () => {
  expect(reverseInParthenses("foo(bar(baz))blim")).toEqual('foobazrabblim');
});