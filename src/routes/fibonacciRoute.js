const { Router } = require("express");
const route = Router();
const fibonacciController = require("../controllers/fibonacciController");

route.post("/", fibonacciController.fibonacci);


module.exports = route;