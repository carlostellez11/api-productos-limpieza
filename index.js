const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");

const userRoutes = require("./src/routes/userRoutes");
const productRoutes = require("./src/routes/productRoutes");
const cartRoutes = require("./src/routes/cartRoutes");
const orderRoutes = require("./src/routes/orderRoutes");
const paymentRoutes = require("./src/routes/paymentRoutes");
const premiumPlanRoutes = require("./src/routes/premiumPlanRoutes");
const financialReportRoutes = require("./src/routes/financialReportRoutes");

const verifyToken = require("./src/middlewares/authMiddleware");

dotenv.config();

const app = express();

app.use(express.json());

// Conexión a MongoDB
connectDB();

// Ruta pública
app.get("/", (req, res) => {
    res.json({
        message: "API running successfully"
    });
});

// Rutas protegidas
app.use("/api/users", verifyToken, userRoutes);
app.use("/api/products", verifyToken, productRoutes);
app.use("/api/carts", verifyToken, cartRoutes);
app.use("/api/orders", verifyToken, orderRoutes);
app.use("/api/payments", verifyToken, paymentRoutes);
app.use("/api/premiumplans", verifyToken, premiumPlanRoutes);
app.use("/api/reports", verifyToken, financialReportRoutes);

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});