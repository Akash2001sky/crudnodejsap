const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");
const {
  getProducts,
  getProduct,
  addProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller.js");
router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", addProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
module.exports = router;
