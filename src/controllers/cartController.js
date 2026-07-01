const Cart = require("../models/cart");

exports.createCart = async (req, res) => {
    try {
        const cart = new Cart(req.body);
        await cart.save();

        res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error creating cart" });
    }
};

exports.getCarts = async (req, res) => {
    try {
        const carts = await Cart.find()
            .populate("user")
            .populate("products.product");

        res.json(carts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching carts" });
    }
};

exports.getCartById = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id);

        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error fetching cart" });
    }
};

exports.updateCart = async (req, res) => {
    try {
        const cart = await Cart.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error updating cart" });
    }
};

exports.deleteCart = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);

        res.json({ message: "Cart deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting cart" });
    }
};