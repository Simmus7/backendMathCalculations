const { Router } = require("express");
const route = Router();
const circleController = require("../controllers/circleController");

route.post("/", circleController.circleAreaAndPerimeter);


module.exports = route;