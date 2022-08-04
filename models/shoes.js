const mongoose = require('mongoose')

const shoesSchema = new mongoose.Schema({
    name: { type: String, required: true }, // nombre de la zapatilla 
    brand: {type: mongoose.Types.ObjectId , ref : 'brandshoes'}, // marca
    colorway: { type: String, required: true },  // color de zapatilla
    price: { type: Number, required: true }, // precio
    image: { type: Array, required: true }, // array de imagenes
    description: { type: String, required: true }, // descripcion
    stock: { type: Number, required: true }, // numero de stock
    type: {type: mongoose.Types.ObjectId , ref : 'typeshoes'} //Referencia al tipo de zapatilla
})

const Shoes = mongoose.model('shoes', shoesSchema)
module.exports = Shoes