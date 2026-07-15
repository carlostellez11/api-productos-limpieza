const jwt = require("jsonwebtoken");

const token = jwt.sign(
    {
        app: "Cleaning Products API"
    },
    "CleaningProductsAPI2026"
);

console.log(token);