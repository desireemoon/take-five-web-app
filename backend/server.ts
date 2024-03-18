import express, { Request, Response } from "express";
import { MongoClient, Db } from "mongodb";
import authRoutes from "./src/routes/api/authRoutes";

const app = express();
const port = process.env.PORT || 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db: Db;
const dbName = "takeFiveDB";

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
