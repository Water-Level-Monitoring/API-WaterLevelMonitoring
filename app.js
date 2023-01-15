const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors()); // aku nambahin ini mas ilham

const appRoute = require("./src/routes/route-sensor");
app.use("/", appRoute);

// aku nambahin ini mas ilham
app.use(
  cors({
    origin: "./src/routes/route-sensor.js",
  })
);

app.listen(80, () => {
  console.log("Server Berjalan di Port : 8080");
});

