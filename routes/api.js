const router = require('express').Router();

router.get('/', async (req, res) => {
  const url = 'https://owen-wilson-wow-api.onrender.com/wows/random?results=5';
  const results = await fetch(url);
  const json = await results.json();
  res.render('index', { title: '', randomResults: json });
});

router.post('/', async (req, res) => {
  const input = req.body.title;
  const url =
    'https://owen-wilson-wow-api.onrender.com/wows/random?results=100';
  const apiResults = await fetch(url);
  const json = await apiResults.json();
  const results = json.filter((item) => {
    return item.movie.toLowerCase().startsWith(input.toLowerCase());
  });
  res.render('index', { title: input, searchResults: results });
});

module.exports = router;
