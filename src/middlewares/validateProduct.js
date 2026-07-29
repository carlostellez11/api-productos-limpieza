const productSchema = require("../validations/productValidation");

module.exports = (req, res, next) => {

    const { error } = productSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    next();

};