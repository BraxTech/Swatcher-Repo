const mongoose = require('mongoose');

const ColorSchema = new mongoose.Schema({
    color_family:{
        type: String,
        required: true,
    },
    color_name:{
        type: String,
        required: true
    },
    hexcode:{
        type: String,
        required: true
    },
})
const Color = mongoose.model( "Color", ColorSchema, "Colors" )
module.exports = Color;