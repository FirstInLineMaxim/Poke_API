const mongoose = require('mongoose')
const { Schema } = mongoose;


const pokeSchema = new Schema({
    id: Number,
    name:{
        english: String,
        japanese: String,
        chinese: String,
        french: String,
    },
     // String is shorthand for {type: String}
    type:[String],
    base:{
        HP: Number,
        Attack: Number,
        Defense: Number
    },
    Sp:{
        Attack:Number,
        Defense:Number
    },
    Speed: Number
  });

  const Pokemon = mongoose.model('pokemon',pokeSchema)

  module.exports = Pokemon