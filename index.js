const express = require('express');
const app = express();

app.use(express.json());

const db = [];

app.post('/posts', (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required' });
  }

  const id = Date.now().toString();
  const post = {
    id,
    title
  };
  
  db.push(post);
  return res.status(201).send(post);
});

module.exports = app;