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

router.post('/search/movies/:page', async (req, res) => {
  const numPerPage = 5;
  let page = req.params.page || 1;
  const input = req.body.title;

  const url =
    'https://owen-wilson-wow-api.onrender.com/wows/random?results=100';
  const results = await fetch(url);
  const json = await results.json();
  const updatedResults = json.filter((item) => {
    return item.movie.toLowerCase().startsWith(input.toLowerCase());
  });

  const length = updatedResults.length;

  let start = numPerPage * page - numPerPage;
  let end = start + numPerPage;
  let paginatedResults = updatedResults.slice(start, end);

  res.render('search/movies', {
    results: paginatedResults,
    current: page,
    pages: Math.ceil(length / numPerPage),
    searchTerm: input,
  });
});

module.exports = router;
