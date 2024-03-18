import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../../controllers/categoryController";
import { authenticate } from "../../middlewares/authMiddleware";
import { authorize } from "../../middlewares/authorizationMiddleware";

const router = express.Router();

// Protected routes
router.post("/", authenticate, authorize, createCategory); /// Only authorized roles can update
router.get("/", authenticate, getAllCategories); // Authenticate all users but no specific authorization required
router.get("/:categoryId", authenticate, getCategoryById); // Authenticate all users but no specific authorization required
router.put("/:categoryId", authenticate, authorize, updateCategory); // Only authorized roles can update
router.delete("/:categoryId", authenticate, authorize, deleteCategory); // Only authorized roles can delete

export default router;
