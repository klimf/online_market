/**
 * Created by user pc on 14.10.2016.
 */
angular.module('contactList.controllers', [])

    .controller('contactListCtrl',
        [
            '$scope',
            'contactStorage',
            'cartStorage',
            function ($scope, contactStorage, cartStorage) {

                $scope.contactList = [];
                $scope.contactList = contactStorage.getContacts();
                $scope.cartList = cartStorage.getCartItems();
                var id = $scope.cartList.length + 1;
                $scope.addToCart = function (id) {
                    $scope.cartList.push(id);

                }

            }])


    .controller('newContactCtrl',
        [
            '$scope',
            function ($scope) {
                $scope.newContact = {};
                var id = $scope.contactList.length + 1;
                $scope.submit = function() {
                    $scope.contactList.push({
                        firstName: $scope.newContact.firstName,
                        lastName: $scope.newContact.lastName,
                        email: $scope.newContact.email,
                        id: id
                    })
                }
            }])

