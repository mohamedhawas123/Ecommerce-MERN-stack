import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import path from 'path'
import morgan from 'morgan'

connectDB()

dotenv.config()


const app = express()

if(process.env.NODE === 'development') {
    app.use(morgan('dev'))
}


app.use(express.json())

app.use(cors())

// app.get('/', (req, res) => {
//     res.json({'success': "yes"})
// })

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload',  uploadRoutes)


const __dirname = path.resolve()

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))


if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))

}else {
    app.get('/', (req, res) => {
    res.json('API IS RUNNING')
})
}




app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

app.use(notFound)

app.use(errorHandler)

app.listen(process.env.PORT || 5000, console.log("server is running "))
