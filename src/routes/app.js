const router = require('express').Router();
const { convertDate, getRandom, getOrdered } = require('../utils/utils');

router.get('/', async (req, res) => {
  const json = await getRandom();
  res.render('index', { randomResults: json });
});

router.get('/search/:page/movies', async (req, res) => {
  const numPerPage = 5;
  let page = req.params.page || 1;

  const input = req.query.title;
  const json = await getOrdered();
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
  const json = await getOrdered();
  const metaResults = json.filter((item) => {
    return (
      item.movie.toLowerCase() === title &&
      item.current_wow_in_movie === currentWow
    );
  });

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
