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