const express = require("express");
const router = express.Router();

const arr = [];

router.get("/", (req, res) => res.render('form'));

module.exports = router;
