import productModel from "../models/productModel.js";
import { handleResponse } from "../util/responseHandler.js";

const { getAllProductsService, getProductByIdService } = productModel;

const getAllProducts = async (req, res, next) => {
  try {
    const products = await getAllProductsService();
    handleResponse(res, 201, "Products fetched successfully", products);
  } catch (err) {
    next(err);
  }
};
const getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await getProductByIdService(id);
    if(!product) return handleResponse(res, 404, "Product not found");
    handleResponse(res, 201, "Product fetched successfully", product);
  } catch (err) {
    next(err);
  }
};

export default {
  getAllProducts,
  getProductById,
};
