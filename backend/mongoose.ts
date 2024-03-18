import mongoose from "mongoose";

const connectionStringURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017";

mongoose
  .connect(connectionStringURI)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));
