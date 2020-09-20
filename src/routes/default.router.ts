import { Router } from 'express';

const defaultRouter = Router();

defaultRouter.get('/health', (_req, res) => {
  res
    .status(200)
    .json({ uptime: process.uptime(), message: 'OK', timestamp: Date.now() });
});

export default defaultRouter;
