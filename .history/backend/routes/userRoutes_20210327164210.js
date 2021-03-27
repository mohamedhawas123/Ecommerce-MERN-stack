import express from 'express'
import {authUser} from '../controllers/userControllers.js'

const router = express.Router()


router.post('/login', (req, res) => {
    res.json({'message': 'rihggt'})
})

export default router