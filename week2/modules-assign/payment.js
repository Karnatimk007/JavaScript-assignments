//  iv. payment.js - Payment processing
                          import { reduceStock } from './product.js';
                          import { getCartItems, getCartTotal, clearCart } from './cart.js';
                          import { applyDiscount } from './discount.js';
                          
                          // TODO: Implement these functions
                          
                          export function processPayment(paymentMethod, couponCode = null) {
                            // 1. Get cart items and total
                            let cartItems=getCartItems()
                            let cartTotal=getCartTotal()
                            if (cartItems.length === 0) {
                            return {
                            orderId: null,
                            items: [],
                            subtotal: 0,
                            discount: 0,
                            total: 0,
                            paymentMethod,
                            status: "failed",
                            message: "Cart is empty"
                            };
                            }
                            // 2. Apply discount if coupon provided
                            let discount=0
                            let total=cartTotal
                            let discountMessage="No coupon applied"
                            if(couponCode)
                            {   
                                let discountResult=applyDiscount(cartTotal,couponCode,cartItems)
                                discount=discountResult.discount
                                total=discountResult.finalTotal
                                discountMessage=discountResult.message
                            }
                            // 3. Validate payment method (card/upi/cod)
                            let validatePaymentMethodResult=validatePaymentMethod(paymentMethod)
                            if(!validatePaymentMethodResult)
                            {
                                return {
                                    orderId: null,
                                    items: cartItems,
                                    subtotal: cartTotal,
                                    discount: discount,
                                    total: total,
                                    paymentMethod,
                                    status: "failed",
                                    message: "Invalid payment method"
                                };
                            }
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
                           return {
                                 orderId: orderId,
                                 items: cartItems,
                                 subtotal: cartTotal,
                                 discount: discount,
                                 total: total, 
                                 paymentMethod: paymentMethod,
                                 status: "success",
                                 message: `Payment successful. ${discountMessage}`
                               };
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
                          
                        
