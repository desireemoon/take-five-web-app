import express, { Request, Response } from 'express';
import apiRoutes from './api/index'; // Make sure to export the router in your 'api' module using TypeScript syntax

const router = express.Router();

router.use('/api', apiRoutes);

router.use((req: Request, res: Response) => {
  return res.send('Wrong route!');
});

export default router;
