import Order from '../models/orderModel.js'
import asyncHandler from 'express-async-handler'
import express from 'express'




const addOrderItems = asyncHandler(async (req, res) => {
    
    const {orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body

    if(orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error("No Order Items")

    }else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })

        const createdOrder = await order.save()

        res.status(201).json(createdOrder)

    }

})


const getOrderById = asyncHandler(async (req, res) => {


    const order = await Order.findById(req.params.id).populate('user', 'name')

    if(order) {
        res.json(order)
    }else {
        res.status(404)
        throw new Error("Order not Found")
    }


})


const updateOrderToPaid = asyncHandler(async (req, res) => {


    const order = await Order.findById(req.params.id)

    if(order) {
        order.isPaid = true 
        order.paidAt = Date.now()
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payer.email_address

        }

        const updatedORder =  await order.save()

        res.json(updatedORder)

    }else {
        res.status(404)
        throw new Error("Order not Found")
    }


})



export {
    addOrderItems,
    getOrderById,
    updateOrderToPaid
}