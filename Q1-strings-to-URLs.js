// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"
// Output: "Jasmine%20Ann%20Jones"
// ----------------------------------------------------

// given string, return string
// replace " " with "%20"
// cannot use replace() method or regular expressions
// v1 w recursion
// v2 w/o recursion

// recursive solution
toUrl = function(str) {
  // termination case
  if (str.length === 0) {  
    return "invalid input";
  // base case
  } else if (str.length() === 1)  {
    return str;
  // recursion
  } else if (str.charAt[i] == " ") { 
    str.charAt[i] = "%20"
    return toUrl();
  }
};

// alt solution
// string.split() to array
// array.join with  %20 return as string

let str = "Jasmine Ann Jones" //  ("Jasmine Ann Jones")
let arr = str.split(" "); // {"Jasmine", "Ann", "Jones"}
let url = arr.join("%20")  // "Jasmine%20Ann%20Jones"
// methods joined

function toUrl(str) {
  return str.split(" ").join("%20")
}