const { Router } = require("express");
const route = Router();
const triangleController = require("../controllers/triangleController");

route.get("/", triangleController.triangleAreaAndPerimeter);


module.exports = route;