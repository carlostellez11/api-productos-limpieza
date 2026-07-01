const FinancialReport = require("../models/financialReport");

exports.createFinancialReport = async (req, res) => {
    try {
        const report = new FinancialReport(req.body);
        await report.save();

        res.status(201).json(report);
    } catch (error) {
        res.status(500).json({ message: "Error creating report" });
    }
};

exports.getFinancialReports = async (req, res) => {
    try {
        const reports = await FinancialReport.find();

        res.json(reports);
    } catch (error) {
        res.status(500).json({ message: "Error fetching reports" });
    }
};

exports.getFinancialReportById = async (req, res) => {
    try {
        const report = await FinancialReport.findById(req.params.id);

        res.json(report);
    } catch (error) {
        res.status(500).json({ message: "Error fetching report" });
    }
};

exports.updateFinancialReport = async (req, res) => {
    try {
        const report = await FinancialReport.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(report);
    } catch (error) {
        res.status(500).json({ message: "Error updating report" });
    }
};

exports.deleteFinancialReport = async (req, res) => {
    try {
        await FinancialReport.findByIdAndDelete(req.params.id);

        res.json({ message: "Report deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting report" });
    }
};