//  iii. discount.js - Coupon and discount logic
                          // Available coupons
                import {getCartItems} from './cart.js'
                          const coupons = {
                            'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
                            'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
                            'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
                          };
                          
                          // TODO: Implement these functions
                          let cartItems=getCartItems()  
                          export function validateCoupon(couponCode, cartTotal, cartItems) {
                            // 1. Check if coupon exists
                            // 2. Check minimum amount requirement
                            // 3. Check category requirement (if any)
                            // Return { valid: true/false, message: '...' }
                            let i=coupons[couponCode]
                            if(i)
                            {
                                if(cartTotal<i.minAmount)
                                {
                                    return {valid:false,message:"Minimum amount required"}
                                }
                                else
                                {
                                    return {valid:true,message:"Coupon is valid"}
                                }
                            }
                            else
                            {
                                return {valid:false,message:"Coupon is invalid"}
                            }
                          }
                          
                          export function calculateDiscount(couponCode, cartTotal) {
                            // Calculate discount amount based on coupon type
                            // Return discount amount
                            let i=coupons[couponCode]
                            if(i)
                            {
                                if(i.type==="percentage")
                                {
                                    return cartTotal*(i.value/100)
                                }
                                else
                                {
                                    return i.value
                                }
                            }
                            else
                            {
                                return {valid:false,message:"Coupon is invalid"}
                            }
                          }
                          
                          export function applyDiscount(cartTotal, couponCode, cartItems) {
                            // 1. Validate coupon
                            // 2. If valid, calculate discount
                            // 3. Return final amount and discount details
                            // Return { 
                            //   originalTotal: ..., 
                            //   discount: ..., 
                            //   finalTotal: ...,
                            //   message: '...'
                            // }
                            let i=coupons[couponCode]
                            if(i)
                            {
                                if(i.type==="percentage")
                                {
                                    return cartTotal*(i.value/100)
                                }
                                else
                                {
                                    return i.value
                                }
                            }
                            else
                            {
                                return {valid:false,message:"Coupon is invalid"}
                            }
                          }