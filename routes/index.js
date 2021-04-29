require("dotenv").config();
const express = require('express');
const { replaceOne } = require('../models/User.model');
const Recipe = require('../models/recipe.model');
const router  = express.Router();
const axios = require("axios");

router.get('/', (req, res, next) => {
  res.render('index', {user: req.user});
});

router.get('/recipes', (req, res, next) => {
  Recipe.find({})
  .then( recipes => {
    res.render('recipes-list', { recipes, user:req.user });
  })
  .catch( error => {
    console.error(error);
    next(error); 
  });
});

router.get('/private/recipes/search', (req, res, next) => {
  res.render('search', { user:req.user })
})

router.post("/search", (req, res, next) => {
  let {ingredient} = req.body
  axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.API_KEY}&ingredients=${ingredient}&number=20`)
  .then( response => {
    const data = response.data;

    res.render('view-search', { data, user:req.user })
  })
  .catch( error => console.error(error) )
})

router.get('/recipies/view/:id', (req, res, next) => {
  const recipeId = req.params.id
  axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.API_KEY}`)
  .then( response => {
  const recipe = response.data
  res.render('single-recipe', { recipe, user:req.user })
  })
  .catch( error =>  {
    console.log(error)
  })
})

module.exports = router;