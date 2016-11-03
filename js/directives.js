/**
 * Created by user pc on 14.10.2016.
 */
angular.module('contactList.directives', [])

    .directive('contactItem', function() {
        return {
            link: function(scope, elem, attrs) {
            },
            scope: {
                contact: "=contact"
            },
            restrict: 'E',
            templateUrl: './partials/item.html'
        }
    })

    .directive('cartItem', function() {
        return {
            link: function(scope, elem, attrs) {
            },
            scope: {
                cart: "=cart"
            },
            restrict: 'E',
            templateUrl: './partials/cartItem.html'
        }
    })