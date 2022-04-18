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

cosnt string = str.map(function(char) {
  for (let i=0; i=each.length-1; i++) {
    return each.includes(each[i])
  }
})

str.forEach(function(char)) {
  return str.includes(char)
}