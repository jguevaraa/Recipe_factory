require("dotenv").config();
const mongoose = require('mongoose')
const Ingredient = require('../models/ingredient.model')

mongoose.connect('mongodb://localhost:27017/and-now-what');


const ingredient = [
  {
    ingredient: "banana",
    title: "Xocai Healthy Chocolate Peanut Butter Bannana Dip",
    image: "https://spoonacular.com/recipeImages/665469-312x231.jpg",
    likes: 1,
    },
  {
    ingredient: "banana",
    title: "Luscious Orange Cardamom Smoothie",
    image: "https://spoonacular.com/recipeImages/650485-312x231.jpg",
    likes: 1,
    },

    {
      ingredient: "banana",
      title: "Peanut Butter and Jelly Smoothie",
      image: "https://spoonacular.com/recipeImages/655235-312x231.jpg",
      likes: 58,
      },
    {
      ingredient: "tuna",
      title: "Tuna Stuffed Hard-Boiled Eggs",
      image: "https://spoonacular.com/recipeImages/663950-312x231.jpg",
      likes: 4
    },
    {
      ingredient: "tuna",
      title: "Baharat Panko Crusted Albacore Tuna",
      image: "https://spoonacular.com/recipeImages/633386-312x231.jpg",
      likes: 3
    },
    {
      ingredient: "meat",
      title: "Instant Pot Hawaiian Chicken",
      image: "https://spoonacular.com/recipeImages/982365-312x231.jpg",
      likes: 19
    },
    {
      ingredient: "meat",
      title: "Bacon Ice Cream",
      image: "https://spoonacular.com/recipeImages/633314-312x231.jpg",
      likes: 9
    },
    {
      ingredient: "onion",
      title: "Caramelized Onion Dip",
      image: "https://spoonacular.com/recipeImages/716422-312x231.jpg",
      likes: 95
    },
    {
      ingredient: "onion",
      title: "Glazed Pearl Onions",
      image: "https://spoonacular.com/recipeImages/644758-312x231.jpg",
      likes: 1
    },
]

Ingredient
    .create(ingredient)
    .then(data => {
        console.log(data)
        mongoose.connection.close()
    })
    .catch(err => console.error(err))