require("dotenv").config();
const express = require("express");
// const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// app.use(cors());
app.use(express.json());
// console.log(process.env.MONGO_URI);

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");


const uri = process.env.MONGO_URI

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    const taskCollection = client
      .db("Task")
      .collection("taskCollection");
    app.get("/reviews", async (req, res) => {
;
      res.send("users");
    });

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Your server port : ${port}`);
});

