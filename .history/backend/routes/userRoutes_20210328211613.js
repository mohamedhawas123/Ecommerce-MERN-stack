import express from 'express'
import {authUser, getUserProfile} from '../controllers/userControllers.js'

const router = express.Router()


router.post('/login', authUser)

export default router