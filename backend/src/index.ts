import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';

import postRoutes from './routes/postRoutes';

const app = express();
const PORT = 3030;

app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: '*',
    preflightContinue: true,
  }),
);

app.use('/posts', postRoutes);
app.get('/api-docs', async (_req, res) => {
  try {
    const data = await fs.readFile(path.resolve('src/swagger.json'), 'utf8');
    console.log(data);
    res.status(200).json(JSON.parse(data));
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
