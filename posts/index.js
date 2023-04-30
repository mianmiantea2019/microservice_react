import express from 'express';
import { randomBytes } from 'crypto';
import cors from 'cors';

const app = express();
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  console.log(req)

  res.send(posts);
});

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body; //{ title: 'test' }

  posts[id] = {
    id,
    title
  };
  console.log(posts[id])

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log('Listening on 4000');
});
