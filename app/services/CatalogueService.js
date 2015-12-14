(function () {
  'use strict';

  angular.module('msBasket').factory('catalogueService', ["$http", function($http) {
    return {
      get: function() {
        return $http({
          method: 'GET',
          url: "data/catalogue.json"
        });
      }
    }
  }]);
})();
