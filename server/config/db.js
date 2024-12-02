// connects data to the database
import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        mongoose.set('strictQuery',false);
        const conn = await mongoose.connect(process.env.MONGOURI) 
        console.log(`Database connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}



export default connectDB