import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log("Error connecting to MONOGODB", error);
    process.exit(1);
  }
};
