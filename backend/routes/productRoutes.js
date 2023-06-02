import express from "express";
import {
  getProductByID,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controller/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/:id").get(getProductByID);
router
  .route("/:id")
  .get(getProductByID)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;
