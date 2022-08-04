const mongoose = require('mongoose')

const shoesTypeSchema = new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    brand: { type: mongoose.Types.ObjectId, ref: 'brandshoes' }
})

const typeShoes = mongoose.model('typeshoes', shoesTypeSchema)
module.exports = typeShoes