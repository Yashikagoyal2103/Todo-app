import mongoose from "mongoose";
// import("dotenv").config();
import dotenv from 'dotenv';
dotenv.config();


const connectDB = async() => {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then( () => console.log("MongoDB connected successfully"))
    .catch ( (error) => {
      console.log("Error connecting to MongoDB >o<" , error.message);
      process.exit(1); // Exit process with failure
    })
};

export default connectDB; 