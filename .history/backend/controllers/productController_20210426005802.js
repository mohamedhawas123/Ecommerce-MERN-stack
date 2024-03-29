import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'
import express from 'express'




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


const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        
        await product.remove()
        res.json({message: 'Product removed'})

    }else {
        res.status(404)
        throw new Error('Product not found')
    } 

})


const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'Sample Name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample brand',
        category: 'Sample category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample descriptopn'

    })

    const createProduct = await product.save()
    res.status(201).json(createProduct)

    

})


const updateProduct = asyncHandler(async (req, res) => {
    
    const {name, price, description, image, brand, category, countInStock} = req.body

    const product = await Product.findById(req.params.id)
    if(Product) {
        product.name =  name
        product.price =  price
        product.description =  description
        product.image =  image
        product.brand =  brand
        product.category =  category
        product.countInStock =  countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)


    }else {
        res.status(404)
        throw new Error("Product Not found")
    }

    

    

})



export {
    getProducts, 
    getProductById,
    deleteProduct

}