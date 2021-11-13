const { Router } = require("express");
const route = Router();
const rectangleController = require("../controllers/rectangleController");

route.post("/", rectangleController.rectangleAreaAndPerimeter);


module.exports = route;