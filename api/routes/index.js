import express from 'express';

import test from './test';

const router = express.Router();

router.use((req, res, next) => {
  return next();
});

router.use('/test', test);

export default router;
