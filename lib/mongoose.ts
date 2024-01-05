import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.log("Missing MONGODB_URL");
  if (isConnected) {
    console.log("MongoDB is already Connected");
    return;
  }
  try {
    const res = await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "nextdev",
    });
    isConnected = true;
    console.log(`MongoDb is connected successfully ${res.connection.name}`);
  } catch (error) {
    isConnected = false;
    console.warn("MongoDB connection failed :: ", error);
  }
};
