import express, { Request, Response } from 'express';
import os from 'os';

const router = express.Router();
const message = "this is app1. you've hit " + os.hostname() + "\n";

router.get('/api/nodecheck', (req: Request, res: Response) => {
  console.log(message);
  res.send({message});
});

export { router as nodecheckRouter }