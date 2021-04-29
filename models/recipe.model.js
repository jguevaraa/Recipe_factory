
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {type: String, required: true, unique: true },
  ingredient: [{ type: String }],
  cuisines: [{type: String}],
  dishType: [{type: String}],
  readyInMinutes: {type: Number, min: 0},
  author: {type: String},
  image: {type: String, default: "https://x.yummlystatic.com/web/Recipe-default-07.jpg"},
  summary: {type: String},
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;