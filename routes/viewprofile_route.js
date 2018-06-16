var viewprofile = require('../model/user_model')
var express = require('express');
var router = express.Router();

router.get('/:Email_id?', function (req, res, next) {
    
    viewprofile.getAllUserByEmailId(req.params.Email_id,function(err,rows){
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
  
      });
});
router.put('/:Email_id', function (req, res, next) {
    viewprofile.updateUser(req.params.Email_id, req.body, function (err, rows) {
  
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
  
  
    });
  
  });
  module.exports = router;
