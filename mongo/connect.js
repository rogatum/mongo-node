var mongoose = require('mongoose');

module.exports = {
  connect:  function(properties, ready) {
    var open, connectionConfig, mc;

    open = function() {
      console.log(properties.uri + ' : ready.');
      ready();
    };

    mongoose.Promise = global.Promise;
    mongoose.connect(properties.uri, properties.settings);
    mc = mongoose.connection;
    mc.once('open', open);
  }
};

