const express = require('express');
const router = express.Router();
module.exports = router;
const ObjectId = require('mongodb').ObjectId;
const models = require('../models').model;
const { eventBus } = require('../ws.js');
const imagesPath = 'public/img/'
const fs = require('fs-extra');

//start mongod --dbpath ~/mongodb

router.get('/', function (req, res) {

    models.events.find({}).toArray()
        .then((objs) => {
            if (req.accepts("application/json")) {
                res.status(200).json(objs)
                res.end()
            }
            else if (req.accepts("text/html"))
                res.render("../views/featured.ejs", { events: objs })
            return;

        })
})


router.get('/create', function (req, res) {
    if (req.accepts('application/json')) {
        res.json(res)
        res.end()
    }
})

router.get('/search', function (req, res) {

    console.log(req.query.search)
    if (!req.query.search) {
        models.events.find({}).toArray()
            .then((objs) => {
                if (req.accepts("application/json")) {
                    res.status(200).json(objs)
                    res.end()
                }
            })
    }
    else {
        var filter_data = {
            $or:
                [{ "typeEvent": { $regex: req.query.search } },
                { "location": { $regex: req.query.search } }]
        }

        models.events.find(filter_data).toArray().then(
            (result) => {
                console.log(result);
                if (req.accepts("application/json")) {
                    res.status(200).json(result);
                    res.end();
                }
            }).catch((error) => {
                console.error(error);
                res.status(404).end();
            })
    }
})


router.get('/edit/:id', function (req, res) {
    models.events.findOne({ _id: new ObjectId(req.params.id) })
        .then((event) => {
            if (event !== null) {
                if (req.accepts('application/json')) {
                    res.json(event)
                    res.end()
                }
                else if (req.accepts("text/html"))
                    res.render("../views/edit.ejs", { event: event });
                return;
            } else {
                console.log("The id isn't in the collection")
                res.status(404).end();
            }
        })
})



router.post('/', function (req, res) { 
    try {

        var obj = req.body
        obj["persons"] = 1;

        var file = req.files["cover"]
        var uploadPath = imagesPath + file.name

        obj["path"] = 'img/' + file.name
        obj["typeEvent"] = obj["typeEvent"].toLowerCase()
        obj["location"] = obj["location"].toLowerCase()
        obj["listNick"] = [obj["listNick"]]
        
        file.mv(uploadPath)
            .then((err) => {
                if (err) throw err

                models.events.insertOne(obj)
                    .then(
                        (id_obj) => {
                            console.log(id_obj.insertedId)

                            eventBus.emit('newEvent') 

                            models.events.find({}).toArray().then(result => {
                                if (req.accepts('application/json')) {
                                    res.status(201).json(result)
                                }
                            })
                        }
                    )
            })
    } catch (err) {
        console.error(err);
        res.status(404).end();
    }
})



router.delete("/:id", (req, res) => {
    try {
        models.events.findOneAndDelete({ _id: new ObjectId(req.params.id) })
            .then(
                (result) => {
                    console.log(result);
                    var src = result.value.path
                    console.log(src)
                    
                    eventBus.emit('deleteEvent', result.value._id, result.value.creator);

                    models.events.findOne({ path: src })
                        .then((result) => {

                            if (!result) {
                                fs.unlink("public/" + src, function (err) {
                                    if (err) { throw err }
                                    res.status(204)
                                    if (req.accepts('application/json')) {
                                        res.json(result)
                                        res.end()
                                    }
                                    else if (req.accepts('text/html')) {
                                        res.method = "GET"
                                        res.redirect('/events')
                                    }
                                })
                            } else {
                                if (req.accepts('application/json')) {
                                    res.json(result)
                                    res.end()
                                }
                                else if (req.accepts('text/html')) {
                                    res.method = "GET"
                                    res.redirect('/events')
                                }
                            }
                        })
                }
            )
    } catch (err) {
        console.error(err);
        res.status(404).end();
    }
})


router.put('/:id', (req, res) => {
    try {

        var filter = { _id: new ObjectId(req.params.id) }
        models.events.findOne(filter)
            .then((result) => {

                if (req.files) {
                    var file = req.files["cover"]
                    var uploadPath = imagesPath + file.name

                    file.mv(uploadPath)
                        .then((err) => {
                            if (err) throw err


                            result.typeEvent = req.body.typeEvent
                            result.location = req.body.location
                            result.num = req.body.num
                            result.age = req.body.age
                            result.cost = req.body.cost
                            result.level = req.body.level
                            result.date = req.body.date
                            result.path = 'img/' + file.name
                            

                            models.events.replaceOne(filter, result, { upsert: true })
                                .then(() => {

                                    eventBus.emit('updateEvent', result);

                                    if (req.accepts('application/json')) {
                                        res.status(200).json(result)
                                    }
                                    else if (req.accepts('text/html')) {
                                        res.method = "GET"
                                        res.redirect(`/event/${result._id}`)
                                    }
                                })
                        })
                } else {

                    result.typeEvent = req.body.typeEvent
                    result.location = req.body.location
                    result.num = req.body.num
                    result.age = req.body.age
                    result.cost = req.body.cost
                    result.level = req.body.level
                    result.date = req.body.date

                    models.events.replaceOne(filter, result, { upsert: true })
                        .then(() => {

                            eventBus.emit('updateEvent', result);

                            if (req.accepts('application/json')) {
                                res.status(200).json(result)
                            }
                            else if (req.accepts('text/html')) {
                                res.method = "GET"
                                res.redirect(`/event/${result._id}`)
                            }
                        })

                }
            })

    } catch (err) {
        console.error(err);
        res.status(404).end();
    }
})