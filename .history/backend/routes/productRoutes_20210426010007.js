import express from 'express'
import {createProduct, updateProduct ,getProducts, getProductById, deleteProduct} from '../controllers/productController.js'
import {protect, admin} from '../middleware/authMiddleware.js'


const router = express.Router()

//router.route('/').get(getProducts)
router.get('/', getProducts) 

router.route('/:id')
    .get(getProductById )
    .delete(protect, admin, deleteProduct )
    .put()

export default router


