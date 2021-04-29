const express = require('express');
const { isLoggedIn } = require('../middlewares');

const User = require('../models/User.model');
const Recipe = require('../models/recipe.model');
const router = express.Router();
const passport = require('passport');

router.get('/profile', isLoggedIn, (req, res, next) => {
  Recipe.find({})
  .then( recipes => {
  res.render('profile', { recipes, user:req.user });
})
})

router.post('/profile', (req, res, next) => {

  res.render('profile', { user: req.user });
})

router.get('/recipes/create', isLoggedIn, (req, res) => {
res.render("create-form", { user: req.user })
});

router.post('/recipes/create', (req, res, next) => {
  const { title, ingredient, cuisines, dishType, readyInMinutes, author, image, summary} = req.body;
  Recipe.create( { title, ingredient, cuisines, dishType, readyInMinutes, author, image, summary} )
  .then(() => {
    res.redirect('/recipes');
  })
  .catch(error => res.render('create-form', { error }));
});

router.get('/recipes/:id/edit', isLoggedIn, (req, res, next) => {
  const { id } = req.params;
  Recipe.findById(id)
.then( recipes => res.render('update-form', { recipes, user: req.user }))
.catch( error => next(error));  
});

router.post('/recipes/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { title, ingredient, cuisines, dishType, readyInMinutes, author, image, summary} = req.body;
  Recipe.findByIdAndUpdate( id, { title, ingredient, cuisines, dishType, readyInMinutes, author, image, summary }, { new: true })
  .then(() => res.redirect('/recipes'))
  .catch(error => res.render('update-form', { error }));
});

router.get('/recipes/:id/delete', isLoggedIn, (req, res, next) => {
  const { id } = req.params;
  Recipe.findByIdAndDelete(id)
  .then(() => res.redirect('/recipes'))
  .catch(error => next(error));
});

module.exports = router;
