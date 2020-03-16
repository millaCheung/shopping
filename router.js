var express = require('express');
var api = require('./models/api');

var router = express.Router();

router.get('/', function (req, res) {
    res.render('index.html', {
        user: req.session.user
    });
});

router.get('/register', function (req, res) {
    res.render('register.html');
});

router.post('/register', function (req, res) {
    api.getValue(req, res);
    api.setValue(req, res);
});

router.get('/login', function (req, res) {
    res.render('login.html');
});

router.post('/login', function (req, res) {
    api.searchValue(req, res);
});

router.get('/logout', function (req, res) {
    req.session.user = null;
    res.redirect('/login');
});

router.get('/list', function (req, res) {
    res.render('list.html', {
        user: req.session.user
    });
});

router.get('/product_detail', function (req, res) {
    res.render('product_detail.html', {
        user: req.session.user
    });
});

module.exports = router;