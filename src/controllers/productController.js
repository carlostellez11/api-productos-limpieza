const Product = require("../models/product");

exports.createProduct = async (req, res) => {
    try {

        const product = new Product(req.body);
        await product.save();

        res.status(201).json(product);

    } catch (error) {

        res.status(500).json({
            message: "Error creating product."
        });

    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().select(
            "_id name brand category description price stock isActive"
        );

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products." });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).select(
            "_id name brand category description price stock isActive"
        );

        if (!product) {
            return res.status(404).json({
                message: "Product not found."
            });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error fetching product." });
    }
};

exports.updateProduct = async (req, res) => {
    try {

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!product) {
            return res.status(404).json({
                message: "Product not found."
            });
        }

        res.status(200).json(product);

    } catch (error) {

        res.status(500).json({
            message: "Error updating product."
        });

    }
};

exports.deleteProduct = async (req, res) => {
    try {

        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found."
            });
        }

        res.status(200).json({
            message: "Product deleted successfully."
        });

    } catch (error) {

        res.status(500).json({
            message: "Error deleting product."
        });

    }
};