const jwt = require("jsonwebtoken");

const SECRET = "ApplicationToken2026";

const token = jwt.sign(
    {
        app: "secure-api"
    },
    SECRET,
    {
        noTimestamp: true
    }
);

console.log("\nApplication Token:\n");
console.log(token);