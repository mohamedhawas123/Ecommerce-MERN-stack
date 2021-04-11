import Order from '../models/orderModel.js'
import asyncHandler from 'express-async-handler'
import express from 'express'




const addOrderItems = asyncHandler(async (req, res) => {
    
    const {orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body

    if(orderItems && orderItems.lenght === 0) {
        res.status(400)
        throw new Error("No Order Items")

    }else {
        const order = new Order({
            orderItems,
            user: req.user._id
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })
    }

})