const express = require("express");
const cors = require("cors");
// const eventsRouter = require(".app/routes/event.routes")


const app = express();
// app.use()   // use middleware function

// var corsOptions = {
//   origin: "http://localhost:3000"
// };


// const db = require("./app/models");
// const Event = db.events


// db.sequelize.sync();

// app.use('app/routes/event.routes', eventsRouter)

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


const eventRoutes = require("./app/routes/event.routes");
eventRoutes(app);
// set port, listen for requests
const PORT = process.env.DATABASE_URL || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});