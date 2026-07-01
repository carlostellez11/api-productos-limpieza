const Order = require("../models/order");

exports.createOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();

        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: "Error creating order" });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();

        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders" });
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        res.json(order);
    } catch (error) {
        res.status(500).json({ message: "Error fetching order" });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(order);
    } catch (error) {
        res.status(500).json({ message: "Error updating order" });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);

        res.json({ message: "Order deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting order" });
    }
};