//   ii. cart.js - Shopping cart operations
import { getProductById, checkStock } from './product.js';

let cartItems = [];

// TODO: Implement these functions

export function addToCart(productId, quantity) {
  // 1. Get product details
  // 2. Check stock availability
  // 3. Check if product already in cart
  //    - If yes, update quantity
  //    - If no, add new item
  // 4. Return success/error message
  let i = getProductById(productId)
  if (!i) return "Product not found";
  if (quantity <= 0) return "Quantity must be greater than 0";
  if (checkStock(productId, quantity)) {
    let j = cartItems.find(product => product.id === productId)
    if (j) {
      j.quantity = j.quantity + quantity
    }
    else {
      cartItems.push({ id: productId, name: i.name, price: i.price, quantity: quantity })
    }
  }
  else {
    return "Out of stock"
  }
}

export function removeFromCart(productId) {
  // Remove product from cart
  let i = cartItems.find(product => product.id === productId)
  if (i) {
    cartItems.splice(cartItems.indexOf(i), 1)
    return "Product removed from cart"
  }
  else {
    return "Product not found in cart"
  }
}

export function updateQuantity(productId, newQuantity) {
  // Update quantity of product in cart
  // Check stock before updating
  let i = cartItems.find(product => product.id === productId)
  if (i) {
    if (newQuantity <= i.stock) {
      i.quantity = newQuantity
      return "Quantity updated"
    }
    else {
      return "Out of stock"
    }
  }
  return "Product not found in cart"
}

export function getCartItems() {
  // Return all cart items with product details
  return cartItems
}

export function getCartTotal() {
  // Calculate total price of all items in cart
  // Return total
  let total = cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0)
  return total
}

export function clearCart() {
  // Empty the cart
  cartItems = []
}
