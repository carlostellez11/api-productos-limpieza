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

const verifyAppToken = require("./src/middlewares/authMiddleware");
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
app.use("/api/users", verifyAppToken, userRoutes);
app.use("/api/products", verifyAppToken, productRoutes);
app.use("/api/carts", verifyAppToken, cartRoutes);
app.use("/api/orders", verifyAppToken, orderRoutes);
app.use("/api/payments", verifyAppToken, paymentRoutes);
app.use("/api/premiumplans", verifyAppToken, premiumPlanRoutes);
app.use("/api/reports", verifyAppToken, financialReportRoutes);

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});