/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.


Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
getFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullName(p2); // => 'Charlie Brown'
***********************************************************************/
const Bobby = {
  firstName: 'Bobby', 
  lastName: 'King'
}
function getFullName(person) {
  // Your code here 
  let values = Object.values(person);
  //console.log(values[0]);
  let name = ""; 
  name = values[0] + " " + values[1];
  return name;
}

console.log(getFullName(Bobby));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;
