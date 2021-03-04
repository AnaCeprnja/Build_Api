const express = require('express');
const router = require('express').Router();
const Api = require('../models/Api')

router.get('/', (req, res) => {
    res.send("Welcome to API")
});

router.api('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;