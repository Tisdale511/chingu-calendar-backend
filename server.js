const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
// app.use()   // use middleware function

var corsOptions = {
  origin: "http://localhost:3001"
};


const db = require("./app/models");

db.sequelize.sync();

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Testing" });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});