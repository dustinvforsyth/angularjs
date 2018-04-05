angular.
    module('shoppingCart').
    service('shoppingCart', function () {
        let self = this;
        let _cartArray = [];

        return {
            getCartItems: function () {
                return _cartArray;
            },

            addToCart: function (newItem) {
                return _cartArray.push(newItem);
            },

            removeCartItem: function (id) {
                let index = _cartArray.findIndex(id);
                _cartArray.pop(index);
            },


        }



    });