import Order from '../models/orderModel.js'
import asyncHandler from 'express-async-handler'
import express from 'express'




const addOrderItems = asyncHandler(async (req, res) => {
    
    const {orderItems, shippingAddress, paymentMethod, itemsPrice } = req.body

})