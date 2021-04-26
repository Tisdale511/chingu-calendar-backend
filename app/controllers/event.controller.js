const db = require("../models/index");
const Event = db.Event;
const Op = db.Sequelize.Op;

db.sequelize.sync();


// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// Retrieve all Events from the database.
exports.findAll = async () => {
  console.log(Event)
  let result = await Event.findAll()
  return result
};

// Create and Save a new Event
exports.create = (req, res) => {
  
  Event.create(req.body)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Some error occurred while creating the Event."
    });
  });
};


// Update an Event by the id in the request
exports.update = (req, res) => {
  Event.update(req.body)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Event."
    });
  });
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

