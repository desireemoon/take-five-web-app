import express, { Request, Response }  from "express";
import activityRoutes from './activityRoutes';
import userRoutes from './userRoutes'
import categoryRoutes from './categoryRoutes';


const router = express.Router();

router.use('/activity', activityRoutes);
router.use('/category', categoryRoutes);
router.use('/users', userRoutes);

export default router;
