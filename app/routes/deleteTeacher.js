var express = require('express');
var router = express.Router();

router.get('/deleteTeacher', function(req, res) {
   
  res.render('deleteTeacher', {
    pageTitle: 'Delete Teacher',
    pageID: 'deleteTeacher'
  });
  
});

module.exports = router;
