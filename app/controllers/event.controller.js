const db = require("../models/index");
const Event = db.Event;
const Op = db.Sequelize.Op;

db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// Create and Save a new Event
// exports.create = (req, res) => {
//   const event = {
//     name: req.body.name,
//     description: req.body.description,
//     startTime: req.body.startTime,
//     endTime: req.body.endTime    
// };

// Event.create(event)
// .then(data => {
//   res.send(data);
// })
// .catch(err => {
//   res.status(500).send({
//     message:
//       err.message || "Some error occurred while creating the Event."
//   });
// });
// };

// const test = Event.create(
//     {
//       name: 'front end stuff',
//       description: 'tuesday',
//       startTime: '3',
//       endTime: '4'
//     }
// )


  // const event = {
  //     name: req.body.name,
  //     description: req.body.description,
  //     startTime: req.body.startTime,
  //     endTime: req.body.endTime    
  // };

  // Event.create(event)
  // .then(data => {
  //   res.send(data);
  // })
  // .catch(err => {
  //   res.status(500).send({
  //     message:
  //       err.message || "Some error occurred while creating the Event."
  //   });
  // });


// simple route
// app.get("/events", (req, res) => {
//   // const test = Event.create(
//   //   {
//   //     name: 'progess being made',
//   //     description: 'dots appear on days with events',
//   //     // startTime: '3',
//   //     // endTime: '4',
//   //     startDate: new Date(),
//   //     endDate: new Date()
//   //   }
//   // )
//   db.events.findAll()
//   .then(result => res.json(result))
// });

// Retrieve all Events from the database.
exports.findAll = async () => {
  console.log(Event)
  let result = await Event.findAll()
  return result
};


// Update a Event by the id in the request
exports.update = () => {
  
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  console.log('deleting ID ', id)

  Event.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        console.log("Event was deleted successfully!")
        res.send({
          message: "Event was deleted successfully!"
        });
      } else {
        console.log(`Cannot delete Event with id=${id}. Maybe Event was not found!`)
        res.send({
          message: `Cannot delete Event with id=${id}. Maybe Event was not found!`
        });
      }
    })
    .catch(err => {
      console.log("Could not delete Event with id=" + id)
      res.status(500).send({
        message: "Could not delete Event with id=" + id
      });
    });
};

// Delete all Events from the database.
exports.deleteAll = () => {
  
};

