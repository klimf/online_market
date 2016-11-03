/**
 * Created by user pc on 14.10.2016.
 */
angular.module('contactList.services', [])

    .service('contactStorage',
        [
            function() {
                var data = [
                    {
                        name: 'Хлеб',
                        description: '',
                        category: 'vegetarian',
                        price: '5',
                        src: './img/bread.png',
                        link: '',
                        id: 0
                    },
                    {
                        name: 'Масло',
                        description: '',
                        category: 'vegetarian',
                        price: '90',
                        src: './img/butter.png',
                        link: '',
                        id: 1
                    },
                    {
                        name: 'Курица',
                        description: '',
                        category: 'novegetarian',
                        price: '180',
                        src: './img/chicken.png',
                        link: '',
                        id: 2
                    },
                    {
                        name: 'Яйца',
                        description: '',
                        category: 'novegetarian',
                        price: '60',
                        src: './img/eggs.png',
                        link: '',
                        id: 3
                    },
                    {
                        name: 'Рыба',
                        description: '',
                        category: 'novegetarian',
                        price: '200',
                        src: './img/fish.png',
                        link: '',
                        id: 4
                    },
                    {
                        name: 'Фрукты',
                        description: '',
                        category: 'vegetarian',
                        price: '120',
                        src: './img/fruits.png',
                        link: '',
                        id: 5
                    },
                    {
                        name: 'Мёд',
                        description: '',
                        category: 'vegetarian',
                        price: '300',
                        src: './img/honey.png',
                        link: '',
                        id: 6
                    },
                    {
                        name: 'Джем',
                        description: '',
                        category: 'vegetarian',
                        price: '160',
                        src: './img/jam.png',
                        link: '',
                        id: 7
                    },
                    {
                        name: 'Сок',
                        description: '',
                        category: 'vegetarian',
                        price: '80',
                        src: './img/juice.png',
                        link: '',
                        id: 8
                    },
                    {
                        name: 'Мясо',
                        description: '',
                        category: 'novegetarian',
                        price: '220',
                        src: './img/meat.png',
                        link: '',
                        id: 9
                    },
                    {
                        name: 'Молоко',
                        description: '',
                        category: 'vegetarian',
                        price: '70',
                        src: './img/milk.png',
                        link: '',
                        id: 10
                    },
                    {
                        name: 'Травка',
                        description: '',
                        category: 'vegetarian',
                        price: '8K',
                        src: './img/salad.png',
                        link: '',
                        id: 11
                    }

                ];

                function getContacts() {
                    return data;
                }



                return {
                    getContacts: getContacts
                }

            }])

.service('cartStorage',
    [
        function() {
            var data = [
                {
                    name: 'Хлеб',
                    description: '',
                    category: 'vegetarian',
                    price: '5',
                    src: './img/bread.png',
                    link: '',
                    id: 0
                }
            ];

            function getCartItems() {
                return data;
            }

            return {
                getCartItems: getCartItems
            }

        }]);