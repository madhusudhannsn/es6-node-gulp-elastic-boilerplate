import express from 'express';
import logger from '../src/logger';

const router = express.Router();
const log = logger();

router.get('/',(req,res) => {
  log.info('Welcome to user');
  res.send('Welcome to user');
});

export default router;
