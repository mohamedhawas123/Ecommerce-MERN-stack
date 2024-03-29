import express from 'express'
import {authUser, getUserProfile} from '../controllers/userControllers.js'
import protect from '../middleware/authMiddleware.js'


const router = express.Router()


router.post('/login', authUser)
router.route('/profile').get(getUserProfile)

export default router