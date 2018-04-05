angular.
  module('phoneBuy').
  component('phoneBuy', {
    templateUrl: 'phone-buy/phone-buy.template.html',
    controller: ['$state', 'Phone', 'shoppingCart',
      function PhoneBuyController($state, Phone, shoppingCart) {
        let self = this;
        self.selectedPhoneId = $state.params.phoneId || "motorola-xoom-with-wi-fi";
        this.phones = Phone.query();
        this.orderProp = 'age';

        self.selectedPhone = function () {
          $state.go('.', {
            phoneId: self.selectedPhoneId
          });
        }

        self.addToCart = function () {
          shoppingCart.addToCart(self.selectedPhoneId);
        }

        self.buyNow = function () {
        }

        if (!$state.params.phoneId) {
          self.selectedPhone();
        }
      }
    ]
  });