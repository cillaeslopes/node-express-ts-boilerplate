import { Router } from 'express';

const router = Router();

router.get('/health', (_req, res) => {
  res
    .status(200)
    .json({ uptime: process.uptime(), message: 'OK', timestamp: Date.now() });
});

export default router;
