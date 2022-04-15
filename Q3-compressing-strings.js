// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"
// Output: "3ab2c4da"
// ----------------------------------------------------

// given string, return string
// loop to find repeated char
// compress char
// push count of instances if > 1

let str = "aaabccdddda";
let arr = str.split(""); // a, a, a, ..., a  2nd pass 
let map = arr.map(function(arr) {
  let count = 0 //  1
  if (arr[i] == arr[i+1]) {  // a[0] = a[1]
    count ++  //  +1  
    arr[i].splice(i)  // a, a, b ...
    return count // 1, a, a, b ...
  } 
  return arr [i]
});