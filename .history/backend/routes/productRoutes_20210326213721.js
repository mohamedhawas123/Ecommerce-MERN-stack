import express from 'express'
import {getProducts, getProductById} from '../controllers/productController.js'


const router = express.Router()


router.get('/', asyncHandler(async (req, res) => {
    const prodcuts = await Product.find({})
    res.json(prodcuts)
})) 

router.get('/:id', asyncHandler( async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        res.json(product)
    }else {
        res.status(404)
        throw new Error('Product not found')
    }

    
}))

export default router


