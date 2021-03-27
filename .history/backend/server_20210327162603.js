import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'


connectDB()

dotenv.config()


const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
    res.json({'success': "yes"})
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

app.listen(5000, console.log("شغال يا نجم"))