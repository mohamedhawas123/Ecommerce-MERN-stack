import Order from '../models/orderModel.js'
import asyncHandler from 'express-async-handler'
import express from 'express'




const getProducts = asyncHandler(async (req, res) => {
    const prodcuts = await Product.find({})
    res.json(prodcuts)

})