var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = require('./data.json');
  console.log(data);
  res.render('index', {myData :{ title: 'SIT722 DevOps Glossary', 'tableData': data.item }});
});

module.exports = router;
