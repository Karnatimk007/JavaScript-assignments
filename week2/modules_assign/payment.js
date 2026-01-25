//  iv. payment.js - Payment processing
                          import { reduceStock } from './product.js';
                          import { getCartItems, getCartTotal, clearCart } from './cart.js';
                          import { applyDiscount } from './discount.js';
                          
                          // TODO: Implement these functions
                          
                          export function processPayment(paymentMethod, couponCode = null) {
                            // 1. Get cart items and total
                            let cartItems=getCartItems()
                            let cartTotal=getCartTotal()
                            // 2. Apply discount if coupon provided
                            if(couponCode)
                            {
                                let discount=applyDiscount(couponCode,cartTotal)
                                if(discount)
                                {
                                    cartTotal=cartTotal-discount
                                }
                            }
                            // 3. Validate payment method (card/upi/cod)
                            let validatePaymentMethodResult=validatePaymentMethod(paymentMethod)
                                // 4. Process payment (simulate)
                                let orderId=generateOrderId()
                                // 5. Reduce stock for all items
                                for(let i of cartItems)
                                {
                                    reduceStock(i.id,i.quantity)
                                }
                                // 6. Clear cart
                                clearCart()
                                // 7. Generate order summary
                                
                                // Return order summary:
                            // {
                            //   orderId: ...,
                            //   items: [...],
                            //   subtotal: ...,
                            //   discount: ...,
                            //   total: ...,
                            //   paymentMethod: ...,
                            //   status: 'success/failed',
                            //   message: '...'
                            // }
                           if(validatePaymentMethodResult){ return {orderId:orderId,items:cartItems,
                                subtotal:cartTotal,discount:discount,total:cartTotal
                                ,paymentMethod:paymentMethod,
                                status:"success",message:"Payment successful"}}
                                else
                                {
                                    return {orderId:orderId,items:cartItems,
                                        subtotal:cartTotal,discount:discount,total:cartTotal
                                        ,paymentMethod:paymentMethod,
                                        status:"failed",message:"Payment failed"}
                                }
                          }
                          
                          export function validatePaymentMethod(method) {
                            // Check if method is valid (card/upi/cod)
                            if(method==="card"||method==="upi"||method==="cod")
                            {
                                return true
                            }
                            else
                            {
                                return false
                            }
                          }
                          function generateOrderId() {
                            // Generate random order ID
                            return 'ORD' + Date.now();
                          }
                          
                        
