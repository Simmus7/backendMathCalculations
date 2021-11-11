const { Router } = require("express");
const route = Router();
const fibonacciController = require("../controllers/fibonacciController");

route.get("/", fibonacciController.fibonacci);


module.exports = route;