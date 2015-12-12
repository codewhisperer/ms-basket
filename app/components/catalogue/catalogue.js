(function () {
  'use strict';

  angular.module('msBasket').directive('catalogue', function() {
    return {
      restrict: 'E',
      scope: {
        cart: '=',
        calculateCartTotal: '&'
      },
      controller: function() {
        var vm = this;

        // vm.products = require('../../data/catalogue.json');
        vm.products = []
        vm.products.push({
          name: "Jeans",
          code: "J01",
          price: 32.95,
          amount: 1
        });
        vm.products.push({
          name: "Blouse",
          code: "B01",
          price: 24.95,
          amount: 1
        });
        vm.products.push({
          name: "Socks",
          code: "S01",
          price: 7.95,
          amount: 1
        });

        vm.buy = function(product) {
          if(_.contains(vm.cart, product)) {
            vm.cart[_.indexOf(vm.cart, product)].amount++;
          } else {
            vm.cart.push(product);
          }
          vm.calculateCartTotal();
        }
      },
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'app/components/catalogue/catalogue.html'
    };
  });
})();
