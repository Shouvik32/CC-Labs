const mongoose = require('mongoose');



const categorySchema=mongoose.Schema({
    id: Number,
    name: String
})

module.exports =mongoose.model('Category', categorySchema);