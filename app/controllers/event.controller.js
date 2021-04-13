const db = require("../models");
const Event = db.events;
const Op = db.Sequelize.Op;

// Create and Save a new Event
// exports.create = (req, res) => {
  
// };

const test = Event.create(
    {
      name: 'event name test',
      description: 'this is working',
      startTime: '3',
      endTime: '4'
    }
)

// exports.create = (req, res) => {
//     // Validate request
//     if (!req.body.name) {
//       res.status(400).send({
//         message: "Content can not be empty!"
//       });
//       return;
//     }
//     if (!req.body.startTime) {
//       res.status(400).send({
//         message: "Content can not be empty!"
//       });
//       return;
//     }
//     if (!req.body.endTime) {
//       res.status(400).send({
//         message: "Content can not be empty!"
//       });
//       return;
//     }
//     // if (!req.body.startDate) {
//     //   res.status(400).send({
//     //     message: "Content can not be empty!"
//     //   });
//     //   return;
//     // }
//     // if (!req.body.endDate) {
//     //   res.status(400).send({
//     //     message: "Content can not be empty!"
//     //   });
//     //   return;
//     // }

    

//     const event = {
//         name: req.body.name,
//         description: req.body.description,
//         startTime: req.body.startTime,
//         endTime: req.body.endTime    
//     };

//     Event.create(event)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Event."
//       });
//     });

// }

// Retrieve all Events from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Event with an id
exports.findOne = (req, res) => {
  
};

// Update a Event by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Event with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Events from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Events
exports.findAllPublished = (req, res) => {
  
};
