const { Router } = require("express");
const route = Router();
const circleController = require("../controllers/circleController");

route.get("/", circleController.circleAreaAndPerimeter);


module.exports = route;