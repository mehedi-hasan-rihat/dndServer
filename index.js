require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON bodies

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = process.env.MONGO_URI;

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
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const taskCollection = client.db("Task").collection("taskCollection");

    // GET: Retrieve all tasks for the logged-in user by email
    app.get("/tasks/:email", async (req, res) => {
      const { email } = req.params;
      try {
        const tasks = await taskCollection.find({ email }).toArray();
        if (tasks.length === 0) {
          return res.status(404).json({ message: "No tasks found for this email." });
        }
        res.status(200).json(tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ message: "Server error" });
      }
    });

    // POST: Add a new task
    app.post("/tasks", async (req, res) => {
      const taskData = req.body;
      try {
        const result = await taskCollection.insertOne(taskData);
        res.status(201).json(result);
      } catch (error) {
        console.error("Error adding task:", error);
        res.status(500).json({ message: "Error adding task" });
      }
    });

    // PUT: Update task details (title, description, category)
    app.put("/tasks/:id", async (req, res) => {
      const { id } = req.params;
      const { title, description, status } = req.body;

      try {
        const result = await taskCollection.updateOne(
          { _id: new ObjectId(id) },
          {
            $set: {
              title,
              description,
              status, // Assuming you have a status field for To-Do, In Progress, Done
            },
          }
        );

        if (result.matchedCount === 0) {
          return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task updated successfully" });
      } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ message: "Error updating task" });
      }
    });


    app.put("/tasks/status/:id", async (req, res) => {
        const { id } = req.params;
        const { status } = req.body;
  
        try {
          const result = await taskCollection.updateOne(
            { _id: new ObjectId(id) },
            {
              $set: {
               
                status, // Assuming you have a status field for To-Do, In Progress, Done
              },
            }
          );
  
          if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Task not found" });
          }
  
          res.status(200).json({ message: "Task updated successfully" });
        } catch (error) {
          console.error("Error updating task:", error);
          res.status(500).json({ message: "Error updating task" });
        }
      });


    // DELETE: Delete a task
    app.deletse("/tasks/:id", async (req, res) => {
      const { id } = req.params;
      try {
        const result = await taskCollection.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted successfully" });
      } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ message: "Error deleting task" });
      }
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
  } finally {
    // Ensure client connection is closed when done
    // await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
