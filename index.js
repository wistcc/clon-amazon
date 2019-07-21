const app = new Vue({
    el: '#app',
    data: {
        product: {
            name: 'Echo Dot (3rd Gen) - Smart speaker with Alexa',
            selected: {
                id: 1,
                name: 'Charcoal',
                color: '#38393e',
                img: 'https://images-na.ssl-images-amazon.com/images/I/619HkSq0-mL._SL1000_.jpg',
                quantity: 100,
            },
            models: [
                {
                    id: 1,
                    name: 'Charcoal',
                    color: '#38393e',
                    img: 'https://images-na.ssl-images-amazon.com/images/I/619HkSq0-mL._SL1000_.jpg',
                    quantity: 100,
                },
                {
                    id: 2,
                    name: 'Heather Gray',
                    color: '#696969',
                    img: 'https://images-na.ssl-images-amazon.com/images/I/61lYMRN%2BCPL._SL1000_.jpg',
                    quantity: 10,
                },
                {
                    id: 3,
                    name: 'Sandstone',
                    color: '#b3b3b3',
                    img: 'https://images-na.ssl-images-amazon.com/images/I/619JBC0vjGL._SL1000_.jpg',
                    quantity: 0,
                },
            ]
        },
    }
})
