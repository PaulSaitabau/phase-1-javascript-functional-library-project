// function to standardize input for collection functions
const standardizeInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
   }
   
   
   // Applies a function to each item in a collection
   const myEach = function(collection, callback) {
    const newCollection = standardizeInput(collection);
    for (let idx = 0; idx < newCollection.length; idx++) {
       callback(newCollection[idx]);
    }
    return collection;
   }
   
   // Creates a new array with the results of calling a function for every array element
   const myMap = function(collection, callback) {
    const newCollection = standardizeInput(collection);
    const newArr = [];
    for (let idx = 0; idx < newCollection.length; idx++) {
       newArr.push(callback(newCollection[idx]));
    }
    return newArr;
   }
   
   // Applies a function against an accumulator and each element in the collection (from left to right) to reduce it to a single output value
   const myReduce = function(collection, callback, acc) {
    let newCollection = standardizeInput(collection);
    if (!acc) {
       acc = newCollection[0];
       newCollection = newCollection.slice(1);
    }
    for (let i = 0; i < newCollection.length; i++) {
       acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
   }
   
   // Returns the first element in the collection that satisfies the provided testing function
   const myFind = function(collection, predicate) {
    const newCollection = standardizeInput(collection);
    for (let idx = 0; idx < newCollection.length; idx++) {
       if (predicate(newCollection[idx])) return newCollection[idx];
    }
    return undefined;
   }
   
   // Creates a new array with all elements that pass the test implemented by the provided function
   const myFilter = function(collection, predicate) {
    const newCollection = standardizeInput(collection);
    const newArr = [];
    for (let idx = 0; idx < newCollection.length; idx++) {
       if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
    }
    return newArr;
   }
   
   // Returns the number of elements in the collection
   const mySize = function(collection) {
    const newCollection = standardizeInput(collection);
    return newCollection.length;
   }
   
   // Array Functions
   
   // Returns the first element of the array or the first n elements
   const myFirst = function(arr, stop=false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
   }
   
   // Returns the last element of the array or the last n elements
   const myLast = function(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
   }
   
   // Sorts the elements of an array in place and returns the array
   const mySortBy = function(arr, callback) {
    const newArr = [...arr];
    return newArr.sort((a, b) => callback(a) > callback(b) ? 1 : -1);
   }
   
   // Helper function for myFlatten
   const unpack = function(receiver, arr) {
    for (let val of arr) {
       receiver.push(val);
    }
   }
   
   // Flattens a nested array (or object) up to the specified depth
   const myFlatten = function(collection, shallow, newArr=[]) {
    if (shallow) {
       for (let val of collection) {
         Array.isArray(val) ? unpack(newArr, val) : newArr.push(val);
       }
    } else {
       for (let val of collection) {
         if (Array.isArray(val)) {
           myFlatten(val, false, newArr);
         } else {
           newArr.push(val);
         }
       }
    }
    return newArr;
   }
   
   // Returns an array of a given object's own enumerable property names
   const myKeys = function(obj) {
    const keys = [];
    for (let key in obj){
       keys.push(key);
    }
    return keys;
   }
   
   // Returns an array of a given object's own enumerable property values
   const myValues = function(obj) {
    const values = [];
    for (let key in obj){
       values.push(obj[key]);
    }
    return values;
   }
   