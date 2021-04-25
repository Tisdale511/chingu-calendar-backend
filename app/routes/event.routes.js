module.exports = app => {
    const eventController = require("../controllers/event.controller.js");
    // const router = require("express").Router();


    app.get("/events", (req, res) => {
        // const test = Event.create(
        //   {
        //     name: 'progess being made',
        //     description: 'dots appear on days with events',
        //     // startTime: '3',
        //     // endTime: '4',
        //     startDate: new Date(),
        //     endDate: new Date()
        //   }
        // )
        eventController.findAll()
        .then(result => res.json(result))
    });

    app.delete("/events", (req, res) => {
        eventController.delete()
    })


    // // Create a new event
    // router.post("/", events.create);

    // // Retrieve all events
    // router.get("/", events.findAll);

    // // Retrieve all published events
    // router.get("/published", events.findAllPublished);

    // // Retrieve a single event with id
    // router.get("/:id", events.findOne);

    // // Update a event with id
    // router.put("/:id", events.update);

    // // Delete a event with id
    // router.delete("/:id", events.delete);

    // // Delete all events
    // router.delete("/", events.deleteAll);

    // app.use('/api/events', router);


}