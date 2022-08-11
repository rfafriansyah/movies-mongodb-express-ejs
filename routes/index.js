var express = require("express");
var router = express.Router();

// Halaman Welcome
router.get(`/`, (req, res, next) => {
  res.render(`welcome`, { title: `Halaman Welcome` });
});

// Halaman DashBoard
router.get(`/dashboard`, (req, res, next) => {
  res.render(`dashboard`, { title: `Halaman Dashboard` });
});

module.exports = router;
