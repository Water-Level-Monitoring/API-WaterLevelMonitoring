const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const appRoute = require("./src/routes/route-sensor");
app.use("/", appRoute);

app.listen(80, () => {
  console.log("Server Berjalan di Port : 8080");
});

