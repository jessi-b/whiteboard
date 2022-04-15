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

// trim removes spaces
// string.split() to array
// array.join with  %20 return as string
// push with %20

// recursive solution
toUrl = function(str) {
  if (str.length() == 0) {  // termination case
    return "invalid input";
  } else if (str.length() == 1)  // base case
  {
    return str;
  } else if (str.charAt(i) == " ") {  // recursion
    str = str + "%20"
  }
};

// alt solution
let str = "Jasmine Ann Jones"
let arr = str.split(" ");
toUrl = function(str) {
  for (int i=0; i<arr.length; i++) { 
    type var = arr[i];
    statements using var;
  }