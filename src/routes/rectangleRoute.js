const { Router } = require("express");
const route = Router();
const rectangleController = require("../controllers/rectangleController");

route.get("/", rectangleController.rectangleAreaAndPerimeter);


module.exports = route;