const router = require('express').Router();
const { convertDate } = require('../utils/utils');

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
  const title = decodeURIComponent(req.params.title).toLowerCase();
  const currentWow = Number(req.params.currentWow);
  const url = 'https://owen-wilson-wow-api.onrender.com/wows/ordered/0-90';
  const results = await fetch(url);
  const json = await results.json();
  // console.log(title);
  const metaResults = json.filter((item) => {
    return (
      item.movie.toLowerCase() === title &&
      item.current_wow_in_movie === currentWow
    );
  });
  // console.log(metaResults);

  const metadata = {
    title: metaResults[0].movie,
    release: convertDate(metaResults[0].release_date),
    src: metaResults[0].video['720p'],
    director: metaResults[0].director,
    character: metaResults[0].character,
  };

  res.render('moviePage', { metadata: metadata });
});

module.exports = router;
