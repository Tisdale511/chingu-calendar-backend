module.exports = app => {
    const eventController = require("../controllers/event.controller.js");
    // const router = require("express").Router();


    app.get("/events", (req, res) => {
        eventController.findAll()
        .then(result => res.json(result))
    });

    app.delete("/events/:id", (req, res) => {
        // console.log("request id is  ", req.params.id)
        eventController.delete(req, res)
    })

    app.post('/events', (req, res) => {
        eventController.create(req, res)
    })

    app.put('events/:id', (req, res) => {
        eventController.update(req, res)
    })

    // // Update a event with id
    // router.put("/:id", events.update);

    // // Delete all events
    // router.delete("/", events.deleteAll);

    // app.use('/api/events', router);


}