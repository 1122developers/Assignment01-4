//Q4 - Write a program that uses a while loop to print the first 
//10 even numbers

let nums1: number = 1;
let evennum: number = 0;

while (nums1 < 10) {
    if (nums1 % 2 == 0) {
        console.log("First 10 Even Number is", nums1)
    }
    nums1++
}