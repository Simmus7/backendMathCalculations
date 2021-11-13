const { Router } = require("express");
const route = Router();
const factorialController = require("../controllers/factorialController");

route.post("/", factorialController.factorial);


module.exports = route;