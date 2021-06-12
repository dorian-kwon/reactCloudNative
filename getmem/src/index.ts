import express from 'express';
import cors from 'cors';
import { getmemRouter } from './module/getmem';

const app = express();

app.use(express.json());
app.use(cors());

app.use(getmemRouter);

app.all('*', async (req, res) => {
  res.send({});
});

app.listen(3001, () => {
  console.log('getmem app started. listen on 3001 port.');
});