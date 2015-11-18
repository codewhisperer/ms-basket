(function () {
  'use strict';

  var myApp = angular.module('msBasket',[]);

  myApp.controller('CartController', ['$scope', function($scope) {

    $scope.cart = []
    $scope.total = 0.00;
    $scope.subtotal = 0.00;
    $scope.delivery = 0.00;
    $scope.discount = 0.00;

    $scope.calculateCartTotal = function() {
      var newTotal = 0.00;
      _.map($scope.cart, function(item) {
        // calculate discount on jeans, buy one pair get a second one half price
        if(item.code === 'J01') {
          var discountAmount = Math.floor(item.amount / 2)/2;
          $scope.discount = discountAmount * item.price;
        }
        newTotal += item.price * item.amount;

      });

      // consider discount on jeans, buy one pair get a second one half price
      newTotal = newTotal - $scope.discount;

      // set subtotal
      $scope.subtotal = newTotal;

      // calculate delivery surcharge
      if(newTotal > 0 && newTotal < 50.00) {
        $scope.delivery = 4.95;
      } else if(newTotal >= 50.00 && newTotal < 90) {
        $scope.delivery = 2.95;
      } else {
        $scope.delivery = 0.00;
      }

      $scope.total = newTotal + $scope.delivery;
    }

    $scope.removeFromCart = function(product) {
      if(_.contains($scope.cart, product) && $scope.cart[_.indexOf($scope.cart, product)].amount > 1) {
        $scope.cart[_.indexOf($scope.cart, product)].amount--;
      } else if(_.contains($scope.cart, product) && $scope.cart[_.indexOf($scope.cart, product)].amount === 1) {
          $scope.cart.splice(_.indexOf($scope.cart, product), 1);
      }
      $scope.calculateCartTotal();
    }

  }]);
})();
