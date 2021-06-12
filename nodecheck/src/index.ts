import express from 'express';
import cors from 'cors';
import { nodecheckRouter } from './module/nodecheck';

const app = express();

app.use(express.json());
app.use(cors());

app.use(nodecheckRouter);

app.all('*', async (req, res) => {
  res.send({});
});

app.listen(3002, () => {
  console.log('checkstatus app started. listen on 3002 port.');
})