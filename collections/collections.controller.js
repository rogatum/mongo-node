'use strict';

(function collectionsController() {
  var mongoose, Model, respond;

  mongoose = require('mongoose');
  respond = function(error, contents, response) {
    if(error) {
      response.json({"error" : error});
    } else {
      response.json(contents);
    }
  };

  module.exports = {
    init : function(model) {
      Model = mongoose.model(model);
    },
    list: function(req, res) {
      Model.find({}, function(error, contents) { 
        respond(error, contents, res); 
      });
    },
    find: function(req, res) {
      Model.find({name:  { "$regex": req.params.string } }, 
        function(error, contents) { 
          respond(error, contents, res); 
        });
    },
    create: function(req, res) {
      var newModel = new Model(req.body);
      newModel.save(function(error, contents) { 
        respond(error, contents, res); 
      });
    },
    read: function(req, res) {
      Model.findById(req.params.id, function(error, contents) { 
        respond(error, contents, res); 
      });
    },
    update: function(req, res) {
      Model.findOneAndUpdate(req.params.id, req.body, {new: true}, 
        function(error, contents) { 
          respond(error, contents, res); 
        });
    },
    remove: function(req, res) {
      Model.remove({
        _id: req.params.id
      }, function(err, contents) {
        if (err) {
          res.json({"error" : error});
        } else {
          res.json({ message: 'Content successfully deleted' });
        }
      });
    }
  };

})();