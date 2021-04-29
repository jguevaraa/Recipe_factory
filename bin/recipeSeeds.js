require("dotenv").config();
const mongoose = require('mongoose')
const Recipe = require('../models/recipe.model')

mongoose.connect('mongodb://localhost:27017/and-now-what');


const recipes = [
  {
    
    title: "Xocai Healthy Chocolate Peanut Butter Bannana Dip",
    readyInMinutes: 45,
    servings: 1,
    sourceUrl: "http://www.foodista.com/recipe/2LMVCZ5G/xocai-healthy-chocolate-peanut-butter-bannana-dip",
    image: "https://spoonacular.com/recipeImages/665469-556x370.jpg",
    imageType: "jpg",
    summary: "Xocai Healthy Chocolate Peanut Butter Bannana Dip might be just the hor d'oeuvre you are searching for. For 66 cents per serving, this recipe covers 10% of your daily requirements of vitamins and minerals. Watching your figure? This gluten free, dairy free, and fodmap friendly recipe has 341 calories, 6g of protein, and 18g of fat per serving. 1 person has made this recipe and would make it again. From preparation to the plate, this recipe takes around 45 minutes. It can be enjoyed any time, but it is especially good for The Super Bowl. A mixture of stem bananas, chocolate, peanut butter, and a handful of other ingredients are all it takes to make this recipe so delicious. All things considered, we decided this recipe deserves a spoonacular score of 51%. This score is good.",
    cuisines: ["random"],
    dishTypes: ["condiment","dip","spread"],
    },
  {
    title: "Luscious Orange Cardamom Smoothie",
    readyInMinutes: 45,
    servings: 2,
    sourceUrl: "https://www.foodista.com/recipe/ZKLKH6FG/luscious-orange-cardamom-smoothie",
    image: "https://spoonacular.com/recipeImages/650485-556x370.jpg",
    imageType: "jpg",
    summary: "If you want to add more gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipes to your repertoire, Luscious Orange Cardamom Smoothie might be a recipe you should try. This breakfast has 133 calories, 2g of protein, and 1g of fat per serving. This recipe serves 2. For 29 cents per serving, this recipe covers 7% of your daily requirements of vitamins and minerals. 1 person has tried and liked this recipe. A mixture of bananas, orange juice, cardamom powder, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes roughly roughly 45 minutes. It is brought to you by Foodista. Overall, this recipe earns a solid spoonacular score of 60%.",
    cuisines: [ ],
    dishTypes: [
    "morning meal",
    "brunch",
    "beverage",
    "breakfast",
    "drink"
    ],
    },

    {
      title: "Peanut Butter and Jelly Smoothie",
      readyInMinutes: 45,
      servings: 2,
      sourceUrl: "http://www.foodista.com/recipe/K5KVRWVR/peanut-butter-and-jelly-smoothie",
      image: "https://spoonacular.com/recipeImages/655235-556x370.jpg",
      imageType: "jpg",
      summary: "Peanut Butter and Jelly Smoothie might be just the morn meal you are searching for. For 96 cents per serving, this recipe covers 20% of your daily requirements of vitamins and minerals. This recipe makes 2 servings with 513 calories, 18g of protein, and 34g of fat each. A few people made this recipe, and 58 would say it hit the spot. If you have almond milk, bananas, peanut butter, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly 45 minutes. It is a good option if you're following a gluten free, dairy free, and fodmap friendly diet. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is awesome.",
      cuisines: [ ],
      dishTypes: [
      "lunch",
      "main course",
      "main dish",
      "dinner"
      ],
    },
    {
      title: "Tuna Stuffed Hard-Boiled Eggs",
      readyInMinutes: 45,
      servings: 12,
      sourceUrl: "https://www.foodista.com/recipe/XHLTSP76/tuna-stuffed-hard-boiled-eggs",
      image: "https://spoonacular.com/recipeImages/663950-556x370.jpg",
      imageType: "jpg",
      summary: "The recipe Tuna Stuffed Hard-Boiled Eggs can be made in approximately approximately 45 minutes. One serving contains 53 calories, 6g of protein, and 2g of fat. This gluten free, dairy free, and pescatarian recipe serves 12 and costs 31 cents per serving. Head to the store and pick up eggs, corn, parsley, and a few other things to make it today. 4 people were glad they tried this recipe. It works well as an inexpensive side dish. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 25%. This score is rather bad. If you like this recipe.",
      cuisines: [ ],
      dishTypes: [
      "side dish"
      ],
    },
      
    {
      title: "Baharat Panko Crusted Albacore Tuna",
      readyInMinutes: 45,
      servings: 4,
      sourceUrl: "https://www.foodista.com/recipe/ZZ3MCQMD/baharat-panko-crusted-albacore-tuna",
      image: "https://spoonacular.com/recipeImages/633386-556x370.jpg",
      imageType: "jpg",
      summary: "Baharat Panko Crusted Albacore Tunan is a dairy free and pescatarian recipe with 4 servings. For $1.21 per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. One portion of this dish contains around 11g of protein, 16g of fat, and a total of 431 calories. 3 people found this recipe to be tasty and satisfying. Head to the store and pick up baharat, flour, coconut milk, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly roughly 45 minutes. ",
      cuisines: [ ],
      dishTypes: [ ],
    },
    {
      title: "Instant Pot Hawaiian Chicken",
      readyInMinutes: 18,
      servings: 4,
      sourceUrl: "https://www.pinkwhen.com/instant-pot-hawaiian-chicken-recipe/",
      image: "https://spoonacular.com/recipeImages/982365-556x370.jpg",
      imageType: "jpg",
      summary: "If you want to add more gluten free and dairy free recipes to your repertoire, Instant Pot Hawaiian Chicken might be a recipe you should try. This recipe serves 4 and costs $1.6 per serving. This main course has 377 calories, 20g of protein, and 3g of fat per serving. This recipe from Pink When has 19 fans. Head to the store and pick up chicken breasts, barbecue sauce, dole pineapple tidbits, and a few other things to make it today. ",
      cuisines: [ ],
      dishTypes: [
      "lunch",
      "main course",
      "main dish",
      "dinner"
      ],
    },
    {
      title: "Bacon Ice Cream",
      readyInMinutes: 45,
      servings: 2,
      sourceUrl: "http://www.foodista.com/recipe/G6ZNLSC3/bacon-ice-cream",
      image: "https://spoonacular.com/recipeImages/633314-556x370.jpg",
      imageType: "jpg",
      summary: "One serving contains 1521 calories, 38g of protein, and 125g of fat. For $4.06 per serving, this recipe covers 27% of your daily requirements of vitamins and minerals. It will be a hit at your Summer event. 9 people were impressed by this recipe. It is a good option if you're following a gluten free, dairy free, and fodmap friendly diet. Head to the store and pick up bacon, dulce de leche ice cream, pecans, and a few other things to make it today. From preparation to the plate, this recipe takes about 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 68%. This score is pretty good. ",
      cuisines: [ ],
      dishTypes: [
      "lunch",
      "main course",
      "main dish",
      "dinner"
      ],
    },
    {
      title: "Caramelized Onion Dip",
      readyInMinutes: 45,
      servings: 2,
      sourceUrl: "http://fullbellysisters.blogspot.com/2011/06/caramelized-onion-dip.html",
      image: "https://spoonacular.com/recipeImages/716422-556x370.jpg",
      imageType: "jpg",
      summary: "You can never have too many hor d'oeuvre recipes, so give Caramelized Onion Dip a try. This recipe serves 2 and costs $1.13 per serving. One serving contains 91 calories, 11g of protein, and 0g of fat. It is perfect for The Super Bowl. A couple people made this recipe, and 95 would say it hit the spot. If you have caramelized onions, salt, greek yogurt, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately 45 minutes. It is a good option if you're following a gluten free, primal, and vegetarian diet. All things considered, we decided this recipe deserves a spoonacular score of 53%. This score is solid.",
      cuisines: [ ],
      dishTypes: [
      "condiment",
      "dip",
      "spread"
      ],
    },
    {
      title: "Glazed Pearl Onions",
      readyInMinutes: 45,
      servings: 4,
      sourceUrl: "http://www.foodista.com/recipe/2L2KNFMK/glazed-pearl-onions",
      image: "https://spoonacular.com/recipeImages/644758-556x370.jpg",
      imageType: "jpg",
      summary: "Glazed Pearl Onions might be just the side dish you are searching for. This recipe makes 4 servings with 41 calories, 0g of protein, and 4g of fat each. For 23 cents per serving, this recipe covers 0% of your daily requirements of vitamins and minerals. 1 person has made this recipe and would make it again. A mixture of honey, olive oil, pearl onions, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes approximately 45 minutes. It is a good option if you're following a caveman, gluten free, dairy free, and primal diet. All things considered, we decided this recipe deserves a spoonacular score of 11%. This score is rather bad.",
      cuisines: [ ],
      dishTypes: [
      "side dish"
      ],
    },
]

Recipe
    .create(recipes)
    .then(data => {
        console.log(data)
        mongoose.connection.close()
    })
    .catch(err => console.error(err))