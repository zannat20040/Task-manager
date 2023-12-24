const express = require('express');
const jwt = require('jsonwebtoken')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xtkjyfm.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    const databse = client.db("Task-manager")
    const taskCollection = databse.collection("allTask")

    app.post('/jwt', (req, res) => {
      const user = req.body;
      console.log('User:', user);
      console.log('Token: ', process.env.SECRET);

      const token = jwt.sign(user, process.env.SECRET, { expiresIn: '1h' });

      res.cookie('token', token, { httpOnly: true, sameSite: 'none', secure: true }).send({ success: true })


    });

    // dashboard
    app.post('/addTask', async (req, res) => {
      const task = req.body
      const result = await taskCollection.insertOne(task);
      res.send(result)
    })

    app.get('/addTask', async (req, res) => {
      const email = req.query.email
      const query = { email: email }
      const token = req.cookies.token
      console.log(token)
      const result = await taskCollection.find(query).toArray();
      res.send(result)
    })

    app.patch('/addTask/:id', async (req, res) => {
      const id = req.params.id;
      const data = req.body
      const query = { _id: new ObjectId(id) };
      const updateStatus = {
        $set: {
          status: data.status,
        }
      }
      // console.log(id, data)
      const result = await taskCollection.updateOne(query, updateStatus);
      res.send(result)
    })

    app.put('/addTask/:id', async (req, res) => {
      const id = req.params.id;
      const data = req.body
      const query = { _id: new ObjectId(id) };
      const updateTask = {
        $set: {
          date: data.date,
          description: data.description,
          priority: data.priority,
          time: data.time,
          title: data.title,
        }
      }
      const result = await taskCollection.updateOne(query, updateTask);
      res.send(result)
    })

    app.delete('/addTask/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) };
      const result = await taskCollection.deleteOne(query);
      res.send(result)
    })

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

