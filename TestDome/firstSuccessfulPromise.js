async function firstSuccessfulPromise(promiseArray) {
    // Write your code here
    try {
      return await Promise.any(promiseArray);
    } catch (e) {
      return undefined
    }
  }
  
  let promise = firstSuccessfulPromise([new Promise((resolve, reject) => reject()), 
                new Promise((resolve, reject) => resolve("Success!"))]);
  promise.then(result => console.log(result));
  
  module.exports.firstSuccessfulPromise = firstSuccessfulPromise;