/// <reference path="../typings/tsd.d.ts" />

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Favourite Persons' });
});

router.get('/list', function(req, res, next) {
  res.render('list', { title: 'The List of my favourite persons' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'How to Contact Me' });
});

module.exports = router;
