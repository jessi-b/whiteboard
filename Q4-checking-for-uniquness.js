// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"
// Output: false

// Input: "copyright"
// Output: true
// ----------------------------------------------------

// given string, return bool
// canont use arr  (sort, every, )
// loop check for recurring char  map or forEach
// string.includes()  -- returns bool
// Q case sensiive?
// Q consider " "

let str = "hello";
let str2 = "copyright";
let str3 = "abcabc"

function isUnique(str) {  
  for (let i=0; i=str.lengt; i++) {  // h e l l o
    for (let j=1; j=str.length; j++) {  // 
      if (str[i] == str[j]) {  
        return false;
      }
    }
    return true
  }
}