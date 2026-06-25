const mongoose = require("mongoose");

const financialReportSchema = new mongoose.Schema({
    totalSales:Number,
    totalOrders:Number,
    bestSellingProduct:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    reportDate:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("FinancialReport", financialReportSchema);