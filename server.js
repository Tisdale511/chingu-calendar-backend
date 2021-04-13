const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");



const app = express();
// app.use()   // use middleware function

var corsOptions = {
  origin: "http://localhost:3001"
};


const db = require("./app/models");
const Event = db.events


// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

db.sequelize.sync();

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/events", (req, res) => {
  const test = Event.create(
    {
      name: 'event name test',
      description: 'this is working',
      // startTime: '3',
      // endTime: '4',
      startDate: new Date(),
      endDate: new Date()
    }
  )
  db.events.findAll()
  .then(result => res.json(result))
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});