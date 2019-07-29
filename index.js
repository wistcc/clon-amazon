const app = new Vue({
    el: '#app',
    data: {
        selectedProductId: undefined,
        previewProductId: undefined,
        product: {
            name: 'Echo Dot (3rd Gen) - Smart speaker with Alexa',
            models: [
                {
                    id: 1,
                    name: 'Charcoal',
                    color: '#38393e',
                    img: 'https://images-na.ssl-images-amazon.com/images/I/619HkSq0-mL._SL1000_.jpg',
                    quantity: 100,
                    details: [
                        'Our most popular smart speaker - Now with a fabric design and improved speaker for richer and louder sound.',
                        'Voice control your music - Stream songs from Amazon Music, Apple Music, Spotify, Sirius XM, and others. You can also listen to audiobooks from Audible.',
                        'Bigger, better sound - Pair with a second Echo Dot (3rd gen) for rich, stereo sound. Fill your home with music with compatible Echo devices in different rooms.',
                        'Ready to help - Ask Alexa to play music, answer questions, read the news, check the weather, set alarms, control compatible smart home devices, and more. Echo Dot is designed around your privacy. You can press the microphone off button to disconnect the microphones.',
                        'Connect with others - Call almost anyone hands-free. Instantly drop in on other rooms in your home or make an announcement to every room with a compatible Echo device.',
                        'Use another speaker - Connect to your own speakers over Bluetooth or with a 3.5 mm audio cable.',
                    ],
                },
                {
                    id: 2,
                    name: 'Heather Gray',
                    color: '#696969',
                    img: 'https://images-na.ssl-images-amazon.com/images/I/61lYMRN%2BCPL._SL1000_.jpg',
                    quantity: 10,
                    details: [
                        'Our most popular smart speaker - Now with a fabric design and improved speaker for richer and louder sound.',
                        'Voice control your music - Stream songs from Amazon Music, Apple Music, Spotify, Sirius XM, and others. You can also listen to audiobooks from Audible.',
                        'Bigger, better sound - Pair with a second Echo Dot (3rd gen) for rich, stereo sound. Fill your home with music with compatible Echo devices in different rooms.',
                        'Ready to help - Ask Alexa to play music, answer questions, read the news, check the weather, set alarms, control compatible smart home devices, and more. Echo Dot is designed around your privacy. You can press the microphone off button to disconnect the microphones.',
                        'Connect with others - Call almost anyone hands-free. Instantly drop in on other rooms in your home or make an announcement to every room with a compatible Echo device.',
                        'Use another speaker - Connect to your own speakers over Bluetooth or with a 3.5 mm audio cable.',
                        'Alexa has skills - With tens of thousands of skills and counting, Alexa is always getting smarter and adding new skills like tracking fitness, playing games, and more.',
                        'Voice control your smart home - Turn on lights, adjust thermostats, lock doors, and more with compatible connected devices',
                    ],
                },
                {
                    id: 3,
                    name: 'Sandstone',
                    color: '#b3b3b3',
                    img: 'https://images-na.ssl-images-amazon.com/images/I/619JBC0vjGL._SL1000_.jpg',
                    quantity: 0,
                    details: [
                        'Bigger, better sound - Pair with a second Echo Dot (3rd gen) for rich, stereo sound. Fill your home with music with compatible Echo devices in different rooms.',
                        'Ready to help - Ask Alexa to play music, answer questions, read the news, check the weather, set alarms, control compatible smart home devices, and more. Echo Dot is designed around your privacy. You can press the microphone off button to disconnect the microphones.',
                        'Connect with others - Call almost anyone hands-free. Instantly drop in on other rooms in your home or make an announcement to every room with a compatible Echo device.',
                        'Use another speaker - Connect to your own speakers over Bluetooth or with a 3.5 mm audio cable.',
                        'Alexa has skills - With tens of thousands of skills and counting, Alexa is always getting smarter and adding new skills like tracking fitness, playing games, and more.',
                        'Voice control your smart home - Turn on lights, adjust thermostats, lock doors, and more with compatible connected devices',
                    ],
                },
            ]
        },
    },
    computed: {
        selectedProduct() {
            if (this.selectedProductId) {
                return this.product.models.find(p => p.id === this.selectedProductId)
            }
            return this.product.models[0]
        },
        selectedProductImg() {
            if (this.previewProductId) {
                return this.product.models.find(p => p.id === this.previewProductId).img
            }
            return this.selectedProduct.img
        }
    },
    methods: {
        selectProduct(modelId) {
            this.selectedProductId = modelId
        },
        setPreviewModel(modelId) {
            this.previewProductId = modelId
        },
        clearPreviewModel() {
            this.previewProductId = undefined
        }
    }
})
