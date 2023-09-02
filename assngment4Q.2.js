"use strict";
// // Q No.2.	Implement a simple shopping cart program using an array. Create functions to 
// add items, remove items, // and update quantities using the splice method. Print the cart's 
// contents after each operation.
var cart = ["milk", "sugger", "tea", "cake", "pepsi"];
// console.log(cart);
function shopping(i, i1, i3) {
    cart.splice(i, i1, i3);
    return cart;
}
var cardshoping = shopping(3, 0, "uro");
console.log(cardshoping);
console.log("==================================");
function shopping1(i, i1) {
    cart.splice(0, 1);
    return cart;
}
var cardshopinng1 = shopping1(0, 2);
console.log(cardshopinng1);
