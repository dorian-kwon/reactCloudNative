import express from 'express';
import cors from 'cors';

import { sayserviceRouter } from './module/sayservice';

const app = express();

app.use(express.json());
app.use(cors());

app.use(sayserviceRouter);

app.all('*', async (req, res) => {
  res.send({});
});

app.listen(3003, () => {
  console.log('sayhello app started. listen on 3003 port.');
})