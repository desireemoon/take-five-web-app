//To do: make the routes
import express from 'express';
import {
  createActivity,
  getAllActivities,
  getActivityById,
  updateActivity,
  deleteActivity,
} from '../../controllers/ActivityController';
import { authenticate } from '../../middlewares/authMiddleware';
import { authorize } from '../../middlewares/authorizationMiddleware';

const router = express.Router();

// Protected routes
router.get('/', authenticate, getAllActivities); // Authenticate all users but no specific authorization required
router.get('/:categoryId', authenticate, getActivityById); // Authenticate all users but no specific authorization required
router.post('/',authenticate, authorize, createActivity); // Only authorized roles can update
router.put('/:categoryId', authenticate, authorize, updateActivity); // Only authorized roles can update
router.delete('/:categoryId', authenticate, authorize, deleteActivity); // Only authorized roles can delete

export default router;