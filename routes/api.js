const router = require('express').Router();

router.get('/', async (req, res) => {
  const url = 'https://owen-wilson-wow-api.onrender.com/wows/random?results=5';
  const results = await fetch(url);
  const json = await results.json();
  res.render('index', { title: '', randomResults: json });
});

router.get('/search/:page/movies', async (req, res) => {
  const numPerPage = 5;
  let page = req.params.page || 1;

  const input = req.query.title;
  const url = 'https://owen-wilson-wow-api.onrender.com/wows/ordered/0-90';
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

router.get('/movie/:title/:currentWow', async (req, res) => {
  let title = req.params.title.replace(/-/g, ' ');

  if (title.startsWith('you')) {
    let newTitle = title.slice(0, 3) + ',' + title.slice(3);
    title = newTitle;
  }

  const currentWow = Number(req.params.currentWow);
  const url = 'https://owen-wilson-wow-api.onrender.com/wows/ordered/0-90';
  const results = await fetch(url);
  const json = await results.json();
  const metaResults = json.filter((item) => {
    return (
      item.movie.toLowerCase() === title &&
      item.current_wow_in_movie === currentWow
    );
  });

  res.render('moviePage', { metaResults: metaResults });
});

module.exports = router;
