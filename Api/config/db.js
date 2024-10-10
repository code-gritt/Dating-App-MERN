import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://gokul:gokul@cluster0.ifc0nfa.mongodb.net/"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
    process.exit(1); // exit process with failure, 0 for success
  }
};
