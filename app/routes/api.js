var express = require('express');
var router = express.Router();
var jq1 = require('jquery');
// var bodyParser = require('body-parser');
// var fs = require('fs');


router.get('/api', function(req, res) {
  var data = req.app.get('appData');
  
  res.json(data.teachers);
}); 

// router.get('/api', function(req, res) {
  

//  res.json({"Id": 2});
// });
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: false }));

// router.post('/api', function(req, res) {
//   feedbackData.unshift(req.body);
//   fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
//     if (err) {
//       console.log(err);
//     }
//   });
//   res.json(feedbackData);
// });
 

// router.delete('/api/:id', function(req, res) {
//   feedbackData.splice(req.params.id, 1);
//   fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
//     if (err) {
//       console.log(err);
//     }
//   });
//   res.json(feedbackData);
// });

module.exports = router;
