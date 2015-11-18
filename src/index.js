var myApp = angular.module('msBasket',[]);

myApp.controller('BasketController', ['$scope', function($scope) {
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

  $scope.cart = []
  $scope.total = 0.00;
  $scope.subtotal = 0.00;
  $scope.delivery = 0.00;
  $scope.discount = 0.00;

  var calculateCartTotal = function() {
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
    if(newTotal < 50.00) {
      $scope.delivery = 4.95;
    } else if(newTotal >= 50.00 && newTotal < 90) {
      $scope.delivery = 2.95;
    } else if(newTotal >= 90.00) {
      $scope.delivery = 0.00;
    }

    $scope.total = newTotal + $scope.delivery;
  }

  $scope.buy = function(product) {
    if(_.contains($scope.cart, product)) {
      $scope.cart[_.indexOf($scope.cart, product)].amount++;
    } else {
        $scope.cart.push(product);
    }
    calculateCartTotal();
  }

  $scope.removeFromCart = function(product) {
    if(_.contains($scope.cart, product) && $scope.cart[_.indexOf($scope.cart, product)].amount > 1) {
      $scope.cart[_.indexOf($scope.cart, product)].amount--;
    } else if(_.contains($scope.cart, product) && $scope.cart[_.indexOf($scope.cart, product)].amount === 1) {
        $scope.cart.splice(_.indexOf($scope.cart, product), 1);
    }
    calculateCartTotal();
  }

}]);
