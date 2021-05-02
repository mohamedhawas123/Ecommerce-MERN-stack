import express from 'express'
import {updateOrderToDelievred, getOrders, addOrderItems, getOrderById, updateOrderToPaid, ShowUserOrder} from '../controllers/ordercontroller.js'
import {protect, admin} from '../middleware/authMiddleware.js'


const router = express.Router()

router.route('/').post(protect, addOrderItems ).get(protect, admin, getOrders)
router.route('/myorders').get(protect, ShowUserOrder )
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/deliver').put(protect, admin ,updateOrderToDelievred)



export default router