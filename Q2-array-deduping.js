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
// sort
// if str[i]=str[i+] then remove

let arr = [7, 9, "hi", 12, "hi", 7, 53];
let sortedArr = arr.sort(); // 12, 53, 7, 7,  9, 'hi', 'hi'
function removeDupe(arr) {
  outPut = [];
  for (let i = 0; i <= arr.length-1; i++ ) {
    if (arr[i] == arr[i+1]) {
      outPut.pop(arr[i]);
    } else {
      outPut.push(arr[i])
    }
  return outPut;
  }
}

// let arr = [7, 9, "hi", 12, "hi", 7, 53];
// function removeDupe(arr) {
//   newArr = [];
//   arr.map(function (element, i) {
//     if (element[i] == element[i+1]) {
//       arr(element[i]).splice;
//     } 
//     newArr(element[i]).push; {
//       return newArr2
//     }
//   })
// }

const arr = [7, 9, "hi", 12, "hi", 7, 53];
const removeDupe = arr.map(function(element) {
  if (element == element+) {

  }
  return element * 2;
});
removeDupe;

// // recursive solution
const removeDupe = (arr) => {
  newArr = [];
  // termination case
  if (arr == null) {
    return "invalid input";
  }
  //base case
  if (arr[i] !== arr[i+1]) {
    newArr.push(arr[i]);
  //recursive case
  } else {
    return removeDupe(arr);
  }
}