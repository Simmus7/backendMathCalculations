const { Router } = require("express");
const route = Router();
const factorialController = require("../controllers/factorialController");

route.get("/", factorialController.factorial);


module.exports = route;