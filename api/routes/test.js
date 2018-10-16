import express from 'express';
import { userInfo, user } from '../schema/test';

const router = express.Router();

router.get('/info', (req, res) => {
  res.send(JSON.stringify(userInfo));
});

router.post('/info', (req, res) => {
  res.json({
    code: 200,
    result: {
      ...user
    },
  });
});
export default router;
