'use strict';
(function contentRoutes() {
  var controller = require('../collections.controller');
  controller.init('contentModel');

  module.exports = function(api) {
    /* all */
    api.route('/content')
      .get(controller.list)
      .post(controller.create);

    /* one */
    api.route('/content/:id')
      .get(controller.read)
      .put(controller.update)
      .delete(controller.remove);

    /* search */
    api.route('/content/search/:string').get(controller.find);
  };
})();

