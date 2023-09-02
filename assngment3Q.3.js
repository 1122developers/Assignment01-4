"use strict";
// Q No.3.	Write a program that converts given number of days in to weeks and 
// days such as 17 days = 2 weeks and 3 da
var inputDays = 17;
var days = inputDays % 7;
var weeks = inputDays / 7;
var result = Math.floor(weeks);
console.log("weeks", result, "days", days);
