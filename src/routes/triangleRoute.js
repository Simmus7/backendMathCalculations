const { Router } = require("express");
const route = Router();
const triangleController = require("../controllers/triangleController");

route.post("/", triangleController.triangleAreaAndPerimeter);


module.exports = route;