import pool from "../config/db.js";

const getAllProductsService = async () => {
  const result = await pool.query("SELECT * FROM products");
  return result.rows;
};
const getProductByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
  return result.rows[0];
};

export default {
  getAllProductsService,
  getProductByIdService,
};
