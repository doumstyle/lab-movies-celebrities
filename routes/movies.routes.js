const celebrityModel = require('../models/Celebrity.model');
const movieModel = require('../models/Movie.model');

const router = require('express').Router();

// GET - Create a Movie
router.get("/create", async (req, res, next) => {
  try {
    const celebs = await celebrityModel.find()
    const movies = await movieModel.find().populate('cast');
    res.render("movies/new-movie.hbs", {
      cast: celebs, movies,
      css: ['style']
    });
  } catch (error) {
    console.error(error)
  }
});

router.post('/create', (req, res, next) => {
  console.log(req.body);

  movieModel.create(req.body)
    .then((dbRes) => {
      res.redirect('/movies')
    })
    .catch(dbErr => next(dbErr));
});

// GET -  All Movies
router.get("/", async (req, res, next) => {
  try { 
    const movies = await movieModel.find().populate('cast');
    const celebs = await celebrityModel.find();
    res.render('movies/movies.hbs', {
      cast: celebs, movies,
      css: ['movies', 'style']
    });
  } catch (err) {
    console.error(err);
  }
  
});

module.exports = router;

