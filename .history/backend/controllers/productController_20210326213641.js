import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

const router = express.Router()



const getProducts = asyncHandler(async (req, res) => {
    const prodcuts = await Product.find({})
    res.json(prodcuts)

})


const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        res.json(product)
    }else {
        res.status(404)
        throw new Error('Product not found')
    } 

})

export {
    getProducts, 
    getProductById
}