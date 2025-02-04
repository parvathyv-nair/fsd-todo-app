// Backend - Express.js (server.js)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('YOUR_MONGODB_ATLAS_URI', { useNewUrlParser: true, useUnifiedTopology: true });

const TodoSchema = new mongoose.Schema({ text: String });
const Todo = mongoose.model('Todo', TodoSchema);

app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

app.post('/todos', async (req, res) => {
    const newTodo = new Todo({ text: req.body.text });
    await newTodo.save();
    res.json(newTodo);
});

app.listen(5000, () => console.log('Server running on port 5000'));
