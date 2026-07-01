const Payment = require("../models/payment");

exports.createPayment = async (req, res) => {
    try {
        const payment = new Payment(req.body);
        await payment.save();

        res.status(201).json(payment);
    } catch (error) {
        res.status(500).json({ message: "Error creating payment" });
    }
};

exports.getPayments = async (req, res) => {
    try {
        const payments = await Payment.find();

        res.json(payments);
    } catch (error) {
        res.status(500).json({ message: "Error fetching payments" });
    }
};

exports.getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);

        res.json(payment);
    } catch (error) {
        res.status(500).json({ message: "Error fetching payment" });
    }
};

exports.updatePayment = async (req, res) => {
    try {
        const payment = await Payment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(payment);
    } catch (error) {
        res.status(500).json({ message: "Error updating payment" });
    }
};

exports.deletePayment = async (req, res) => {
    try {
        await Payment.findByIdAndDelete(req.params.id);

        res.json({ message: "Payment deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting payment" });
    }
};