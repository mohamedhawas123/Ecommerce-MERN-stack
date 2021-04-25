import express from 'express'
import {getProducts, getProductById, deleteProduct} from '../controllers/productController.js'
import {protect, admin} from '../middleware/authMiddleware.js'


const router = express.Router()

//router.route('/').get(getProducts)
router.get('/', getProducts) 

router.get('/:id',getProductById ).delete(protect, admin, deleteProduct )

export default router


