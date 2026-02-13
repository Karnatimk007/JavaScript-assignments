// Initial data:
//         let totalAmount = 0;

// 🎯 Tasks
//   1. Add ₹500 to the total
//   2. Add ₹1200 to the total
//   3. Apply a ₹200 discount
//   4. Add 18% GST
//   5. Print the final bill amount
let amount=0;
function addMoney(a){
    amount+=a
}
function discount(a){
    amount-=a
}
addMoney(500)
addMoney(1200)
discount(200)
let gst=amount*0.18
addMoney(gst)
console.log(amount)



