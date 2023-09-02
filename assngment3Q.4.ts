// Q No.4.	Write a program that calculates the discount for a product based on its price.
//  If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.

var productprice: number = 125
if (productprice >= 100) {
    console.log("Discount 10%", productprice - productprice * 10 / 100)
}
else {
    console.log("Discount 05%", productprice - productprice * 5 / 100)
}
