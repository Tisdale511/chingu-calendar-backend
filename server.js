const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const eventsRouter = require(".app/routes/event.routes")


const app = express();
// app.use()   // use middleware function

var corsOptions = {
  origin: "http://localhost:3001"
};


// const db = require("./app/models");
// const Event = db.events


// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// db.sequelize.sync();

// app.use('app/routes/event.routes', eventsRouter)

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


const eventRoutes = require("./app/routes/event.routes");
eventRoutes(app);
// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});