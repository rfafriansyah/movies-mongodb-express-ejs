const express = require(`express`);
const router = express.Router();

// Read -> Get All Movies
router.get(`/`, (req, res, next) => {
  res.render(`movie/allmovies`, { title: `Halaman Get Movies` });
});

// Read -> Create Movies
router.get(`/create`, (req, res, next) => {
  res.render(`movie/createMovies`, { title: `Halaman Create ` });
});

// Read -> Update Movies
router.get(`/update/:movieId`, (req, res, next) => {
  res.render(`movie/updateMovies`, {
    title: `Halaman Update Movies`,
    movieId: req.params.movieId, // didapatkan dari request movie Id-nya
  });
});

// Action Create
router.post(`/create`, (req, res) => {});

// Action Update
router.put(`/update/:movieId`, (req, res) => {});

// Action Delete
router.delete(`/delete/:movieId`, (req, res) => {});

module.exports = router;
