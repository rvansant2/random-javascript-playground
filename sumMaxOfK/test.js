const sumMaxK = require('./index').sumMaxK;

// Tests for sumMaxK
test('sumMaxK passed in ar: [3, 5, 3, 2, 7, 6, 4, 9, 1, 8, 2, 1, 2, 7], K: 3 ', () => {
	expect(sumMaxK([3, 5, 3, 2, 7, 6, 4, 9, 1, 8, 2, 1, 2, 7], 3)).toEqual(24);
});

test('sumMaxK passed in ar: [9, 9, 9, 9], K: 4 ', () => {
	expect(sumMaxK([9, 9, 9, 9], 4)).toEqual(36);
});

test('sumMaxK passed in ar: [9, 9, 8], K: 4 ', () => {
	expect(sumMaxK([9, 9, 8], 4)).toEqual(NaN);
});