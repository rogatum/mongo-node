'use strict';

(function defineCollections() {
  var collections = [
    {
      model: require('./content/content.model'),
      routes: require('./content/content.routes')
    }
  ];

  module.exports = {
    register: function(api) {
        collections.forEach(function(collection) {
          collection.routes(api);
        });
      }
  };
})();