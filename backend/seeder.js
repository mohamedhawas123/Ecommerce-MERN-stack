import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/user'
import products from './data/products'
import User from './models/userModel'
import Product from './models/productModel'
import OrderItem from './models/orderModel'
import connectDB from './config/db'


dotenv.config()


connectDB()


const importData = async () => {


    try {

        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUser  = await User.insertMany(users)


    }catch(error) {

    }

}