'use strict';
(function contentModel() {
  var mongoose, Model;

  mongoose = require('mongoose');
  
  Model = new mongoose.Schema({
    name: { type: String },
    tags: { type: Array },
    created: {
      type: Date,
      default: Date.now
    },
    status: {
      type: [{
        type: String,
        enum: ['published', 'draft', 'archived']
      }],
      default: ['draft']
    }
  });

  module.exports = mongoose.model('contentModel', Model);
})();

/* for more: http://mongoosejs.com/docs/guide.html */