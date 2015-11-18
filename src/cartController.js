(function () {
  'use strict';

  var myApp = angular.module('msBasket',[]);

  myApp.controller('CartController', ['$scope', function($scope) {

    var vm = this;
    vm.cart = []
    vm.total = 0.00;
    vm.subtotal = 0.00;
    vm.delivery = 0.00;
    vm.discount = 0.00;

    vm.calculateCartTotal = function() {
      var newTotal = 0.00;
      _.map(vm.cart, function(item) {
        // calculate discount on jeans, buy one pair get a second one half price
        if(item.code === 'J01') {
          var discountAmount = Math.floor(item.amount / 2)/2;
          vm.discount = discountAmount * item.price;
        }
        newTotal += item.price * item.amount;
      });

      // consider discount on jeans, buy one pair get a second one half price
      newTotal = newTotal - vm.discount;

      // set subtotal
      vm.subtotal = newTotal;

      // calculate delivery surcharge
      if(newTotal > 0 && newTotal < 50.00) {
        vm.delivery = 4.95;
      } else if(newTotal >= 50.00 && newTotal < 90) {
        vm.delivery = 2.95;
      } else {
        vm.delivery = 0.00;
      }

      vm.total = newTotal + vm.delivery;
    }

    vm.removeFromCart = function(product) {
      if(_.contains(vm.cart, product) && vm.cart[_.indexOf(vm.cart, product)].amount > 1) {
        vm.cart[_.indexOf(vm.cart, product)].amount--;
      } else if(_.contains(vm.cart, product) && vm.cart[_.indexOf(vm.cart, product)].amount === 1) {
          vm.cart.splice(_.indexOf(vm.cart, product), 1);
      }
      vm.calculateCartTotal();
    }
  }]);
})();
