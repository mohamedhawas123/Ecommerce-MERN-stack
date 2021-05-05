import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'
import express from 'express'




const getProducts = asyncHandler(async (req, res) => {

    const pageSize = 2
    const page = Number(req.query.pageNumber) || 1

    const keyword = req.query.keyword  ? {
        name : {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}

    const prodcuts = await Product.find({...keyword})
    console.log(keyword)
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


const createProductReview = asyncHandler(async (req, res) => {
    
    const {rating, Comment} = req.body

    const product = await Product.findById(req.params.id)
    if(product) {
        
        const alreadyReviewd = product.review.find(e => e.user.toString() === req.user._id.toString() )

        if(alreadyReviewd) {
            res.status(400)
            throw new Error("Product already reviewd")
        }

        const review = {
            name: req.user.name,
            rating: Number(rating),
            Comment,
            user: req.user._id
        }

        product.review.push(review)
        product.numRefviews = product.review.length
        console.log(product.numRefviews)

        product.rating = product.review.reduce((acc, item) => acc + item.rating, 0) / product.review.length

        await product.save()
        res.status(201).json({'message': 'Review added'})

    }else {
        res.status(404)
        throw new Error("Product Not found")
    }
})
 



export {
    getProducts, 
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
    createProductReview

}