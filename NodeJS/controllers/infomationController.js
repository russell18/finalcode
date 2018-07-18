const express = require('express');

var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var { Information } = require('../models/info');


router.get('/', (req, res) => {
    Information.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log(`Error in Retrieving Employees:` + JSON.stringify(err, undefined, 2)); }
    });
});
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:`, $(req.params.id));

    Information.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log(`Error in Retrieving Employee:` + JSON.stringify(err, undefined, 2)); }
    });
});
router.post('/', (req, res) => {
    var info = new Information({

        name: req.body.name,
        title: req.body.title,
        desc: req.body.desc,
        date: req.body.date,
        img: req.body.img
    });

    info.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log(`Error in Information save:`, +JSON.stringify(err, undefined, 2)); }

    })
});

module.exports = router;