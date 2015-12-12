module.exports = function($http) {
  return {
    get: function() {
      return $http({
        method: 'GET',
        url: "data/data.json"
      });
    }
  };
};

module.exports.$inject = ['$http'];
