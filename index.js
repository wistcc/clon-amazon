const app = new Vue({
    el: '#app',
    data: {
        product: {
            name: 'Echo Dot (3rd Gen) - Smart speaker with Alexa',
            quantity: 100,
            colors: [
                {
                    name: 'Charcoal',
                    code: '#38393e',
                    img: 'https://images-na.ssl-images-amazon.com/images/I/619HkSq0-mL._SL1000_.jpg',
                },
                {
                    name: 'Heather Gray',
                    code: '#696969',
                    img: 'https://images-na.ssl-images-amazon.com/images/I/61lYMRN%2BCPL._SL1000_.jpg',
                },
                {
                    name: 'Sandstone',
                    code: '#b3b3b3',
                    img: 'https://images-na.ssl-images-amazon.com/images/I/619JBC0vjGL._SL1000_.jpg',
                },
            ]
        },
    }
})