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
        this.products = []
        this.products.push({
          name: "Jeans",
          code: "J01",
          price: 32.95,
          amount: 1
        });
        this.products.push({
          name: "Blouse",
          code: "B01",
          price: 24.95,
          amount: 1
        });
        this.products.push({
          name: "Socks",
          code: "S01",
          price: 7.95,
          amount: 1
        });

        this.buy = function(product) {
          if(_.contains(this.cart, product)) {
            this.cart[_.indexOf(this.cart, product)].amount++;
          } else {
            this.cart.push(product);
          }
          this.calculateCartTotal();
        }
      },
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'src/catalogue/catalogue.html'
    };
  });
})();
