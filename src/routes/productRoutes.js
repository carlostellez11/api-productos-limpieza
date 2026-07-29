const express = require("express");
const router = express.Router();

const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

const validateProduct = require("../middlewares/validateProduct");

router.post("/", validateProduct, createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", validateProduct, updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;