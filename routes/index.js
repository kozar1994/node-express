const express = require('express');
const indexCont = require("../controller/indexCont");
const router = express.Router();

/* GET home page. */
router.get('/', indexCont.index);

module.exports = router;
