// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
 ];
 console.log(cart.filter(c=>c.inStock===true))//to get only inStock products
 console.log(cart.map(c=>{
    return {
        name:c.name,
        totalPrice:c.price*c.quantity
    }
 })) //to create a new array with:  { name, totalPrice }
console.log(cart.reduce((acc,c)=>acc+c.totalPrice,0))//to calculate grand total cart value
console.log(cart.find(c=>c.name=="Mouse"))//to get details of "Mouse"
console.log(cart.findIndex(c=>c.name=="Keyboard"))//to find the position of "Keyboard"