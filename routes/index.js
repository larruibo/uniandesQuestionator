var express = require("express");
var router = express.Router();
const mu = require("../db/MongoUtils.js");
ObjectId = require("mongodb").ObjectID;

/* GET home page. */
router.get("/test", function (req, res, next) {
    res.render("home", { user: req.user });
});

/* GET home page. */
router.get("/test2", function (req, res, next) {
    // const name = "Luis";
    // const template = `<h1> Holi ${name} !!! </h1>`;
    // res.send(template);
    mu.algo.find().then((reportes) => {
        return res.render("index", {
            reportes: reportes,
            title: "pruebini",
        });
    });
});

router.get("/getQuestions", function (req, res, next) {
    mu.algo.find().then((preguntas) => {
        return res.json(preguntas);
    });
});

//Endpoint CreateQuestion
router.post("/create", (req, res) => {
    console.log("createeeee");
    let data = req.body;
    const registro = {};
    for (let item in data) {
        registro[item] = data[item];
        console.log(registro[item]);
    }
    registro["timestamp"] = new Date();
    console.log(registro["timestamp"]);
    if (req.user) registro["username"] = req.user.username;
    console.log(registro["username"]);
    registro["answers"] = [];
    mu.algo
        .insert(registro)
        .then(() => mu.algo.findLast())
        .then((record) => {
            console.log(record);
            return res.json(record);
        });
});

//Endpoint findOne
router.get("/questions/:id", (req, res) => {
    const _id = req.params.id;

    const query = { _id: new ObjectId(_id) };

    mu.algo.findOne(query).then((record) => res.json(record));
});

router.post("/:id/createAnswer", (req, res) => {
    const _id = req.params.id;
    console.log("Creating answer ", _id);
    const data = req.body;
    const registro = {};
    for (let item in data) {
        if (item !== "_id") {
            registro[item] = data[item];
            console.log(registro[item]);
        }
    }

    const final = { $set: registro };

    const query = { _id: new ObjectId(_id) };
    mu.algo.updateOne(query, final).then(res.redirect("/getQuestions"));
});

//Endpoint updateOne
router.post("/:id/update", (req, res) => {
    const _id = req.params.id;
    console.log("updateeee ", _id);
    const data = req.body;
    const registro = {};
    for (let item in data) {
        if (item !== "_id") {
            registro[item] = data[item];
            console.log(registro[item]);
        }
    }

    const final = { $set: registro };

    const query = { _id: new ObjectId(_id) };

    mu.algo.updateOne(query, final).then(res.sendStatus(200));
});

module.exports = router;
