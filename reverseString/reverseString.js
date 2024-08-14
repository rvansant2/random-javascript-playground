/**
 * Create a function that reverses a string
 *  - Using for loops
 *  - Recursively
 *  - Using native JS functions.
 */

/**
 * A reverse string with a loop
 * @param {*} str 
 * @returns string in reverse
 */
const reverseStringWithLoop = (str) => {
  let newString = '';
  if (str && Object.prototype.toString.call(str) === '[object String]') {
    for (let i = str.length -1; i >= 0; i--) {
      newString += str[i];
    }
  }

  return newString;
};

/**
 * A recursive reverse of a string
 * @param {*} str 
 * @returns string in reverse
 */
const reverseStringRecursive = (str) => {
  if (!str) {
    return '';
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

/**
 * A simple reverse string
 * @param {*} str 
 * @returns string in reverse
 */
 const reverseStringSimple = (str) => {
  let stringInReverse = str;
  if (stringInReverse && Object.prototype.toString.call(stringInReverse) === '[object String]') {
    stringInReverse = stringInReverse.split('').reverse().join('');
  }
  return stringInReverse;
};

module.exports = {
  reverseStringWithLoop,
  reverseStringRecursive,
  reverseStringSimple,
};
