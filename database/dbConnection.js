import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "../config/config.env" }); // Load environment variables

export const dbConnection = () => {
  console.log("Mongo URI:", process.env.MONGO_URI); // Debugging line

  mongoose
    .connect(process.env.MONGO_URI, { // Use the environment variable
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.error(`Some error occurred while connecting to database: ${err}`);
    });
};

