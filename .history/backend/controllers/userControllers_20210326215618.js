import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'
import express from 'express'

const router = express.Router()



const getProducts = asyncHandler(async (req, res) => {
    const prodcuts = await Product.find({})
    res.json(prodcuts)

})
