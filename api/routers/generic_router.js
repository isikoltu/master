var config = require('../config')

const express = require('express');
// Initialize app
const router = express.Router();
router.get('/users', function (req, res) {
    console.log('users')
    try {
        const MongoClient = require('mongodb').MongoClient;
        const uri = config.cxn_string
        const mongo = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        mongo.connect(err => {
            const users = mongo.db("test").collection("testmain")
            const query = { name: 'test' };
            users.findOne(query).then(user => {
                res.send(user)
            })
            mongo.close;
        });
    }
    catch {
        console.log('err')
    }
});
module.exports = router;