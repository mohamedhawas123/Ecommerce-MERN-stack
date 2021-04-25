import express from 'express'
import {getProducts, getProductById} from '../controllers/productController.js'
import {protect, admin} from '../middleware/authMiddleware.js'


const router = express.Router()

//router.route('/').get(getProducts)
router.get('/', getProducts) 

router.get('/:id',getProductById )

export default router


