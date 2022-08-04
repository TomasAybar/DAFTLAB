const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    type: { type: mongoose.Types.ObjectId, ref: 'typeshoes' }
})

const brandShoes = mongoose.model('brandshoes', brandSchema)
module.exports = brandShoes