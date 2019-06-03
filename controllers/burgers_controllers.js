const express = require('express');

const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', function(req, res){
    burger.selectAll(function(data){
        let hbsObject = {
            cats: data
        };
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res){
    burger.create(['burger_name', 'devoured'],
    [req.body.name, req.body.devoured],
    function(result){
        res.json({id: result.insertID});
    });
});

router.put('/api/burgers/:id', function(req, res){
    let condition = 'id = ' + req.params.id;

    burger.update({ 
        devoured: req.body.devoured
    }, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
        
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;