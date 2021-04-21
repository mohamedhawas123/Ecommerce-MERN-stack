import express from 'express'
import {authUser, getUserProfile, registerUser, updateUserProfile, getUsers} from '../controllers/userControllers.js'
import {protect, admin} from '../middleware/authMiddleware.js'


const router = express.Router()

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/').get(protect, getUsers)
router.route('/profile').get(admin, getUserProfile).put(protect, updateUserProfile)


export default router