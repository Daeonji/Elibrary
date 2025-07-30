const { MongoClient } = require("mongodb");
require('dotenv').config();

const express = require("express");

const cs = process.env.MONGO_URI;
const client = new MongoClient(cs);
const app = express();

app.use(express.json());

let mycoll;

console.log("Trying to connect");

client
  .connect()
  .then(() => {
    console.log("Connected to MongoDB");
    const db = client.db("Library");
    mycoll = db.collection("books");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Authorization, Content-Length, X-Requested-With"
  );
  res.header("Cache-Control", "no-store");
  if (req.method === "OPTIONS") res.sendStatus(200);
  else next();
});

app.get("/books", async (req, res) => {
  try {
    if (!mycoll) {
      throw new Error("MongoDB collection not initialized");
    }
    const availParam = req.query.status;
    if (availParam === "available") {
      const availableBooks = await mycoll
        .find({ status: "available" }, { projection: { _id: false } })
        .toArray();
      res.json(availableBooks);
    } else if (availParam === "checkedout" || availParam === "checked_out") {
      const nonAvail = await mycoll
        .find({ status: "checked out" }, { projection: { _id: false } })
        .toArray();
      res.json(nonAvail);
    } else {
      const allBooks = await mycoll
        .find({}, { projection: { _id: false } })
        .toArray();
      res.json(allBooks);
    }
  } catch (error) {
    console.error("Error retrieving books from MongoDB:", error);
    res.status(500);
  }
});

app.get("/books/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    if (!mycoll) {
      throw new Error("MongoDB collection not initialized");
    }

    const book = await mycoll.findOne(
      { id: bookId },
      { projection: { _id: false } }
    );
    if (book) {
      res.json(book);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error("Error retrieving book from MongoDB:", error);
    res.status(500);
  }
});

app.post("/books/search", async (req, res) => {
  try {
    const title = req.query.title;

    if (!mycoll) {
      throw new Error("MongoDB collection not initialized");
    }

    const books = await mycoll
      .find({ title: { $regex: title, $options: "i" } })
      .toArray();

    res.json(books);
  } catch (error) {
    console.error("Error retrieving book from MongoDB:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/books", async (req, res) => {
  try {
    const newBook = req.body;
    if (!mycoll) {
      throw new Error("MongoDB collection not initialized");
    } else if (
      !newBook.id ||
      !newBook.title ||
      !newBook.author ||
      !newBook.publisher ||
      !newBook.isbn ||
      newBook.avail === undefined
    ) {
      return res.status(403).json({ error: "Missing required fields" });
    }

    await mycoll.insertOne(newBook);
    res.status(201).json(newBook);
  } catch (error) {
    console.error("Error adding book to MongoDB:", error);
    res.status(500);
  }
});

app.put("/books/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    const update = req.body;
    if (!mycoll) {
      throw new Error("MongoDB collection not initialized");
    }

    const result = await mycoll.updateOne({ id: bookId }, { $set: update });
    if (result.modifiedCount > 0) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error("Error updating book in MongoDB:", error);
    res.status(500);
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    if (!mycoll) {
      throw new Error("MongoDB collection not initialized");
    }

    const result = await mycoll.deleteOne({ id: bookId });
    if (result.deletedCount > 0) {
      res.sendStatus(200);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error("Error deleting book from MongoDB:", error);
    res.status(500);
  }
});

app.listen("3000");
