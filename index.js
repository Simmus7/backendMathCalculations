const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyparser = require("body-parser");
cors = require("cors");



const port = process.env.PORT || 5000;
app.set("port", port);

app.use(morgan("dev"));

//No sé para qué sirve esto
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors({ origin: true }));


//Routes
app.use("/fibonacci", require("./src/routes/fibonacciRoute"));
app.use("/circle", require("./src/routes/circleRoute"));
app.use("/rectangle", require("./src/routes/rectangleRoute"));
app.use("/triangle", require("./src/routes/triangleRoute"));
app.use("/factorial", require("./src/routes/factorialRoute"));


app.listen(port, () => {
    console.log("Listen in  the port ", port);
  });

  module.exports = app;