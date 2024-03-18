import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  getUsersByIds,
  updateUser,
  deleteUser,
} from "../../controllers/userController";
import { authenticate } from "../../middlewares/authMiddleware";
import { authorize } from "../../middlewares/authorizationMiddleware";

const router = express.Router();

// Public routes
router.post("/", createUser);
router.get("/", getAllUsers);
//router.get('/', authenticate, getAllUsers); // Authenticate all users but no specific authorization required

// Protected routes
router.get("/:userId", authenticate, getUserById);
router.get("/friends", authenticate, getUsersByIds);
router.put("/:userId", authenticate, authorize, updateUser); // Only authorized roles can update
router.delete("/:userId", authenticate, authorize, deleteUser); // Only authorized roles can delete

export default router;
