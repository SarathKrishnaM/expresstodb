var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('webtechdevops.centralindia.cloudapp.azure.com:51003/test11');
var Schema = mongoose.Schema;

var userDataSchema1 = new Schema({
    title: { type: String, required: true },
    desc: String,
    cont: String
}, { collection: 'user1-data' });

var UserData1 = mongoose.model('UserData1', userDataSchema1);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/get-data', function(req, res, next) {
    UserData1.find()
        .then(function(doc) {
            res.render('index', { items: doc });
        });
});

router.post('/insert', function(req, res, next) {
    var item = {
        title: req.body.title,
        desc: req.body.desc,
        cont: req.body.cont
    };

    var data = new UserData1(item);
    data.save();

    res.redirect('/');
});
module.exports = router;