const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    spec: {
        screen: String,
        processor: String,
        ram: String,
        storage: String,
    },
    stock: Number,  
    image: [String],
    createdAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Product', productSchema);
