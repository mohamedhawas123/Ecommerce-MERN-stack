import express from 'express'
import {authUser, getUserProfile, registerUser, updateUserProfile, getUsers, deleteUser} from '../controllers/userControllers.js'
import {protect, admin} from '../middleware/authMiddleware.js'


const router = express.Router()

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/').get(protect, admin, getUsers)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/:id').delete(protect, admin, deleteUser)


export default router