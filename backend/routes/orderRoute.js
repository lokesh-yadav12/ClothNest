import express from 'express'
import { placeOrder,placeOrderRazorpay,placeOrderStripe,updateStatus,allOrders,userOrders, variefyStripe, variefyRazorpay } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin Fetures
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//payment features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)


//user feature
orderRouter.post('/userorders',authUser,userOrders)

//variefy payment
orderRouter.post('/variefyStripe',authUser,variefyStripe)
orderRouter.post('/variefyRazorpay',authUser,variefyRazorpay)
export default orderRouter