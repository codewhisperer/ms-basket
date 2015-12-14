(function () {
  'use strict';

  angular.module('msBasket').directive('catalogue', ["catalogueService", function(catalogueService) {
    return {
      restrict: 'E',
      scope: {
        cart: '=',
        calculateCartTotal: '&'
      },
      controller: function() {
        var vm = this;

        // load data from service
        vm.products = catalogueService.get().success(function(result) {
          vm.products = result.products;
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
  }]);
})();
