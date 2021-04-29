
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  id: { type: Number },
  ingredient: {type: String, required: true },
  title: {type: String, required: true, unique: true },
  image: {type: String},
  likes: {type: Number},
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;