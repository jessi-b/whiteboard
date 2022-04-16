// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"
// Output: "3ab2c4da"
// ----------------------------------------------------

// given string, return string
// w/o reursion 
// loop to find repeated char
// compress char
// push count of instances if = 1
// w/ recursion

// solution
let str = "aaabccdddda";
function compressStr(str) {  // "aaabccdddda"
  let count = 1;  //  r1 = 2, r2 = 3, r3 resets to 1
  let arr = [];  // ["3a", b]
  for (let i=0; i < str.length; i++) {
    if (str[i] == str[i+1]) {  // r1 a=a, r2 a=a, r3 a!= b, r4 b!=c
      count ++; // r1 +1, r2 +1
    } else if (str[i] !== str[i+1] && count <= 1) { // r3 doesnt meet cond., r4 b!=c & count=1 
      arr.push(str[i]); // "b" into array
    } else {
      arr.push(count + str[i]);  // "3a" into array
      count = 1
    }
  }
  return arr.join('')  //  3ab
}

// solution w/ recursion