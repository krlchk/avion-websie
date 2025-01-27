import express from "express";
import productController from "../controller/productController.js";
const { getAllProducts, getProductById } = productController;

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);

export default router;
