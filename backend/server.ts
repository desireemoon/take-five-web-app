import express, { Request, Response } from "express";
import { MongoClient, Db } from "mongodb";

const app = express();
const port = 3001;

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
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Mongo connection error: ", err.message);
  });

// Middleware
app.use(express.json());

// Routes
app.post("/create", (req: Request, res: Response) => {
  db.collection("bookCollection")
    .insertOne({ title: req.body.title, author: req.body.author })
    .then((results) => res.json(results))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "An error occurred" });
    });
});

app.post("/create-many", (req: Request, res: Response) => {
  db.collection("bookCollection")
    .insertMany([
      { title: "Oh the Places We Will Go!" },
      { title: "Diary of Anne Frank" },
    ])
    .then((results) => res.json(results))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "An error occurred" });
    });
});

app.get("/read", (req: Request, res: Response) => {
  db.collection("bookCollection")
    .find({})
    .toArray()
    .then((results) => res.json(results))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "An error occurred" });
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
