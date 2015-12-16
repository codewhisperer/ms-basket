(function () {
  'use strict';

  // include libs
  var angular = require('angular');
  window._ = require('lodash');
  require('../node_modules/bootstrap/dist/css/bootstrap.min.css');

  angular.module('msBasket',[]);

  // load main controller
  require('./controllers/MainController.js');

})();
