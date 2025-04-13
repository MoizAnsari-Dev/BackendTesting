import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // incase due to some error

const db = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database is Connected");
    })
    .catch((e) => {
      console.error("Failed to Connect");
    });
};

export default db;
