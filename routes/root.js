const express = require('express')
const router = express.Router()
const fs = require('fs')
module.exports = router
const models = require('../models').model
const ObjectId = require('mongodb').ObjectId;
const bcrypt = require('bcrypt');
const { model } = require('../models')
const saltRounds = 10;

router.get('/', (req, res) => {
    res.redirect('index');
})


router.get("/index", (req, res) => {
    res.render("../views/index.ejs");
})

router.post("/signup", (req, res) => {
    var obj = req.body

    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(obj.password, salt, function (err, hash) {

            obj.password = hash;

            models.users.insertOne(obj)
                .then(
                    (result) => {
                        res.status(200).json(result);
                        res.end();
                    })
        });
    });
})

router.get("/signup/:nickname", (req, res) => {
    let nickname = { "nickname": req.params.nickname.trim() }
    console.log(nickname)

    models.users.findOne(nickname)
        .then(result => {
            console.log(result)
            res.status(200).json(result).end()
        })
})


router.post("/login", (req, res) => {

    console.log(req.body)
    var filter_data = { "nickname": req.body["nickname"] }

    models.users.findOne(filter_data)
        .then((user) => {
            console.log(user)

            if (user) {
                if (bcrypt.compareSync(req.body.password, user["password"])) {

                    console.log("[=] PASSWORD GIUSTA ")
                    res.status(200).json(user).end()
                }
            } else {
                console.log("[=] PASSWORD SBAGLIATA ")
                res.status(404).end();
            }
        })
})



router.get("/myevents/:nickname", (req, res) => {
    let nickname = req.params.nickname
    var filter_data = { "creator": nickname }
    models.events.find(filter_data).toArray()
        .then((objs) => {

            if (req.accepts("application/json")) {

                models.events.find({ "listNick": { $in: [nickname] } }).toArray()
                    .then(result => {
                        array = { "created": objs, "joined": result }
                        res.status(200).json(array)
                        res.end()
                    })


            }
            else if (req.accepts("text/html"))
                res.render("../views/myevents.ejs", { events: objs })
            return;

        })
})


router.put("/join/:id/:nick", (req, res) => {

    if (req.params.id) {
        var filter = { _id: new ObjectId(req.params.id) }
    }

    models.events.findOne(filter)
        .then((result) => {

            let flag = true;
            for (let i = 0; i < result.listNick.length; i++) {
                if (result.listNick[i] === req.params.nick) {
                    flag = false;
                }
            }
            if (flag) {
                result.listNick.push(req.params.nick)
                result.persons++
            }

            models.events.replaceOne(filter, result, { upsert: true })
                .then(() => {
                    if (req.accepts('application/json')) {
                        res.status(200).json(result.listNick)
                    }
                })
        })
})

router.put("/disjoin/:id/:nick", (req, res) => {

    if (req.params.id) {
        var filter = { _id: new ObjectId(req.params.id) }
    }

    models.events.findOne(filter)
        .then((result) => {

            result.listNick = result.listNick.filter((x) => x !== req.params.nick)
            result.persons--;

            models.events.replaceOne(filter, result, { upsert: true })
                .then(() => {
                    if (req.accepts('application/json')) {
                        res.status(200).json(result.listNick)
                    }
                })

        })
})

router.get("/event/:id", (req, res) => {

    if (req.params.id) {
        var filter = { _id: new ObjectId(req.params.id) }
    }

    models.events.findOne(filter)
        .then((event) => {
            console.log(event)

            if (event !== null) {

                if (req.accepts("application/json")) {
                    res.status(200).json(event);
                    res.end();
                }
            } else {
                console.log("The id isn't in the collection")
                res.status(404).end();
            }
        })
})