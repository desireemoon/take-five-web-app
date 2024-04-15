import express, { Request, Response } from "express";
import { MongoClient, Db } from "mongodb";
import authRoutes from "./src/routes/api/authRoutes";
import allRoutes from "./src/routes/index";
import "./mongoose"; // Import your MongoDB connection setup
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 3001;

// TODO: Split out using local connections vs prod connections
const connectionStringURI = process.env.MONGODB_URI || `mongodb://localhost:27017`;

const client = new MongoClient(connectionStringURI);

let db: Db;
const dbName = "takeFiveDB";

dotenv.config();
client
  .connect()
  .then(() => {
    console.log("Connected successfully to MongoDB");
    db = client.db(dbName);

    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Mongo connection error: ", err.message);
  });

// Middleware
app.use(express.json());

// Use the auth routes
app.use("/auth", authRoutes);
app.use("/", allRoutes);
