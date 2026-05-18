// Assignment 2: 
// -------------
// E-Commerce Shopping Cart System :
//       Building a shopping cart like Amazon or Flipkart

// Requirements:
//       Create a modular shopping system with 5 files:

//            i. product.js - Product catalog
//                           // Product database (simulated)
                          const products = [
                            { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
                            { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
                            { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
                            { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
                            { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
                          ];
                          
                          // TODO: Implement these functions
                          
                          export function getProductById(id) {
                            // Find and return product by ID
                            let i=products.find(product=>product.id===id)
                            return i
                          }
                          
                          export function getAllProducts() {
                            // Return all products
                            return products
                          }
                          
                          export function getProductsByCategory(category) {
                            // Filter products by category
                            let i=products.filter(product=>product.category===category)
                            return i
                          }
                          
                          export function searchProducts(query) {
                            // Search products by name (case-insensitive)
                            let i=products.filter(product=>product.name.toLowerCase().includes(query.toLowerCase()))
                            return i
                          }
                          
                          export function checkStock(productId, quantity) {
                            // Check if product has enough stock
                            // Return true/false
                            let i=products.find(product=>product.id===productId)
                            return i.stock>=quantity
                          }
                          
                          export function reduceStock(productId, quantity) {
                            // Reduce product stock after purchase
                            let i=products.find(product=>product.id===productId)
                            i.stock=i.stock-quantity
                            return i
                          }


