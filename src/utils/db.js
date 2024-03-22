import mongoose from "mongoose";

const connectDB = async () => {
   try {
      await mongoose.connect(process.env.MONGO);
      console.log("database is connected");
   } catch (error) {
      handleError(error);
      throw new Error("Connection failed");
   }
};

export default connectDB;

