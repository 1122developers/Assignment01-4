"use strict";
//Q1 - Create a function that takes an array, an index, 
//and a value as parameters. Inside the function, 
//use the splice method to insert the value at the 
//specified index in the array. Return the modified array.
let array = ["milk", "sugar", "tea", "biskit", "cake"];
console.log(array);
function itemNmae(i, i2, i3) {
    array.splice(i, i2, i3);
    return array;
}
var newArray = itemNmae(2, 0, "Bakar Khani");
console.log(newArray);
