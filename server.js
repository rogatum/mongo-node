'use strict';
(function mongoNode() {
  var db = require("./mongo/connect"),
      properties = require("./config.json"),
      api = require('express')(),
      port = process.env.PORT || properties.server.port,
      bodyParser = require('body-parser'),
      cors = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', properties.server.cors.domains);
        res.header('Access-Control-Allow-Methods', properties.server.cors.methods);
        res.header('Access-Control-Allow-Headers', properties.server.cors.headers);
        next();
      },
      collections = require("./collections/collections");

  db.connect(properties.db, function() {
    api.use(cors);
    api.use(bodyParser.urlencoded({ extended: true }));
    api.use(bodyParser.json());

    collections.register(api);

    api.listen(port);
    console.log('Rogatum Mongo-node REST API server started on: ' + port);
  });
})();