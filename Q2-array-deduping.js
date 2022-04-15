// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi", 7, 53]
// Output: [7, 9, "hi", 12, 53]
// ----------------------------------------------------

// given array, return array w/o dupes
///// use .isArray() to check if array - string.split() if given string to return array
// loop to find dupe
// remove dupe
// v1 w/o filter()
// v2 w/ filter()
// v3 w/ recursion
// v4 w/o recursion

// alt solution
// use array.map() to compare elements against eachother
// assumes no empty strings ie " "

// Q does it need to be retunred in the order it was given? assume no
// 
// sort
// if str[i]=str[i+] then remove

let arr = [7, 9, "hi", 12, "hi", 7, 53];
let sortedArr = arr.sort(); // 12, 53, 7, 7,  9, 'hi', 'hi'

for (let i = 0; i <= arr.length-1; i++ ) {
  if (sortedArr[i]=sortedArr[i+1]) {
    
  }
}

// recursive solution
removeDupe = function(arr) {
  // termination case
  if (arr.length === 0) {  // 
    return "invalid input";
  // base case
  } else if (condition) {
    return str;
  // recursion
  } else if (conditon) { 
    arr.charAt[i] = "%20"
    return removeDupe();
  }
};
