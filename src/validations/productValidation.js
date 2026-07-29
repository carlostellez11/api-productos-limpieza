const Joi = require("joi");

module.exports = Joi.object({
    name: Joi.string().min(3).max(100).required(),

    brand: Joi.string().required(),

    category: Joi.string().required(),

    description: Joi.string().required(),

    price: Joi.number().positive().required(),

    stock: Joi.number().integer().min(0).required(),

    isActive: Joi.boolean()
});