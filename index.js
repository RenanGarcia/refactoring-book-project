const plays = require("./plays.json");
const invoices = require("./invoices.json");
const statment = require("./statment.js");

console.log(statment(invoices[0], plays));
