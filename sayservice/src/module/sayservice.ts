import express, { Request, Response }from 'express';
import os from 'os';

const router = express.Router();
const message = "hi my name is sayhello application \n";
router.get('/api/sayservice', (req: Request, res: Response) => {
  console.log(message);
  res.send({message});
});

export { router as sayserviceRouter }