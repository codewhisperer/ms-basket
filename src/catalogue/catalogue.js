(function () {
  'use strict';

  angular.module('msBasket').directive('catalogue', function() {
    return {
      restrict: 'E',
      scope: {
        cart: '=',
        calculateCartTotal: '&calculateCartTotal'
      },
      templateUrl: 'src/catalogue/catalogue.html',
      link: function ($scope, element) {
        $scope.products = []
        $scope.products.push({
          name: "Jeans",
          code: "J01",
          price: 32.95,
          amount: 1
        });
        $scope.products.push({
          name: "Blouse",
          code: "B01",
          price: 24.95,
          amount: 1
        });
        $scope.products.push({
          name: "Socks",
          code: "S01",
          price: 7.95,
          amount: 1
        });

        $scope.buy = function(product) {
          if(_.contains($scope.cart, product)) {
            $scope.cart[_.indexOf($scope.cart, product)].amount++;
          } else {
              $scope.cart.push(product);
          }
          $scope.calculateCartTotal();
        }
      }
    };
  });
})();
