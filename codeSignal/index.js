/**
 * Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
 * Example:
 * For year = 1905, the output should be solution(year) = 20;
 * For year = 1700, the output should be solution(year) = 17.
 * @param {*} year 
 * @returns century number
 */
const centuryFromYear = (year) => {
  let yearAsInt = parseInt(year);
  
  if (yearAsInt <= 100) {
    return 1;
  } else if (yearAsInt % 100 === 0) {
    return Math.floor((yearAsInt/100));
  } else {
    return Math.floor((yearAsInt/100)) + 1;
  }
}

/**
 * Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
 * Example:
 * For inputArray = [3, 6, -2, -5, 7, 3], the output should be solution(inputArray) = 21. 
 * 7 and 3 produce the largest product.
 * @param {*} inputArray 
 * @returns largest product value
 */

const largestAdjacentProduct = (inputArray) => {
  productArray = [];
  for (let i = 0; i + 1 < inputArray.length; i++) {
    let productValue = inputArray[i] * inputArray[i + 1];
    productArray.push(productValue);
  }
  // console.log(productArray);
  return Math.max(...productArray);
}


/**
 * Problem description:
 * Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size.
 * Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1.
 * He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
 * 
 * Example:
 * For statues = [6, 2, 3, 8], the output should be
 * solution(statues) = 3.
 * Ratiorg needs statues of sizes 4, 5 and 7.
 * 
 * @param {*} arrayOfNumbers 
 * @returns length of missing consecutive array values
 */

const consecutiveArray = (arrayOfNumbers) => {
  let missingValues = [];
  let sortedArray = arrayOfNumbers.sort((a ,b) => { return a - b; });
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    // console.log(`sortedArray[i + 1]: ${sortedArray[i + 1]}`);
    let diffBetweenValues = (sortedArray[i + 1] !== undefined) ? Math.abs(sortedArray[i] - sortedArray[i + 1]) : 0;
    // console.log(`diffBetweenValues: ${diffBetweenValues}`);
    if (diffBetweenValues > 0) {
      for (let j = 1; j <= diffBetweenValues; j++) {
        let missingValue = sortedArray[i] + j;
        if (!sortedArray.includes(missingValue)) {
          missingValues.push(missingValue);
        }
      }
    }
  }
  // console.log(missingValues);
  return missingValues.length;
};

/**
 * Given two strings, find the number of common characters between them.
 * For s1 = "aabcc" and s2 = "adcaa", the output should be solution(s1, s2) = 3.
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

const commonCharacterCount = (s1, s2) => {
  let frequencyCharCounter1 = {};
    let frequencyCharCounter2 = {};
    
    for (const char1 of s1) {
      frequencyCharCounter1[char1] = (frequencyCharCounter1[char1] || 0) +1;
    }
    
    for (const char2 of s2) {
      frequencyCharCounter2[char2] = (frequencyCharCounter2[char2] || 0) +1;
    }
    
    // console.log(frequencyCharCounter1, frequencyCharCounter2);
    
    let commonCount = 0;
    for (const char in frequencyCharCounter1) {
      if (frequencyCharCounter2[char]) {
        commonCount += Math.min(frequencyCharCounter1[char], frequencyCharCounter2[char]);
      }
    }
  return commonCount;
};

/**
 * Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
 * Example
 * For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
 */

const sortByHeight = (a) => {
  // Filter and sort people in array 
  const people = a.filter(height => height !== -1).sort((a, b) => a - b);
  // console.log(`people: ${people}`);

  // Initialize
  let result = [];
  let index = 0;
  // Loop over array of values
  for (let i = 0; i < a.length; i++) {
    // Keep all -1 values in place
    if (a[i] === -1) {
      result.push(-1);
    } else {
      // Add people sorted people into result array
      result.push(people[index]);
      index++;
    }
  }
  // console.log(`result: ${result}`);
  // Return result
  return result;
}

const reverseInParthenses = (inputString) => {
  // Initialize
  let regexp = /\(([^()]*)\)/g;
  
  // Keep replacing while there are parentheses in the string
  while (regexp.test(inputString)) {
    // Match the innermost parentheses and reverse the content
    inputString = inputString.replace(regexp, (match, group) => {
      // Return empty string if the group is empty, otherwise reverse the group
      return group.length === 0 ? '' : group.split('').reverse().join('');
    });
  }
  
  // Return the final result after all parentheses are processed
  return inputString;
};

module.exports = {
  centuryFromYear,
  largestAdjacentProduct,
  consecutiveArray,
  commonCharacterCount,
  sortByHeight,
  reverseInParthenses,
};