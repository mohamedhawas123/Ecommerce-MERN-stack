import mongoose from 'mongoose'


const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://panzer123:panzer123@cluster0.1es8l.mongodb.net/proshop?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser:true,
            useCreateIndex: true
        })

        console.log(`MongoDB Connect: ${conn.connection.host} `)

    }catch(error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}


export default connectDB