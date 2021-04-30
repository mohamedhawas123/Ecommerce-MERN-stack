import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import path from 'path'


connectDB()

dotenv.config()


const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
    res.json({'success': "yes"})
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload',  uploadRoutes)


const __dirname = path.resolve()

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))


app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

app.use(notFound)

app.use(errorHandler)

app.listen(5000, console.log("server is running "))