import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/user.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import OrderItem from './models/orderModel.js'
import connectDB from './config/db.js'


dotenv.config()


connectDB()


const importData = async () => {


    try {

        await OrderItem.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUser  = await User.insertMany(users)

        const adminUser = createdUser[0]._id

        const sampleProducts = products.map(p => {
            return {
                ...p, 
                user: adminUser
            }
        })

        await Product.insertMany(sampleProducts)

        console.log("Data imported".green.inverse)
        process.exit()


    }catch(error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }

}


const DestoryData = async () => {


    try {

        await OrderItem.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

      
        console.log("Data Destoryed".red.inverse)
        process.exit()


    }catch(error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }

}


if(process.argv[2] == '-d') {
    DestoryData()
}else {
    importData()
}