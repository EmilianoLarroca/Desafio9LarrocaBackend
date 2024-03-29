const {Schema, model} = require('mongoose')

const productsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    stock: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: Array,
        required: true
    },
    IsActive: {
        type: Boolean,
        default: true
    }

})

const productModel = model('products', productsSchema)

module.exports = {
    productModel
}