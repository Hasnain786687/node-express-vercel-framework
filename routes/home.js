const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.render('homes/index');
});

module.exports = router;
