const router = require('express').Router();

router.get('/', async (req, res) => {
  const url = 'https://owen-wilson-wow-api.onrender.com/wows/random?results=5';
  const results = await fetch(url);
  const json = await results.json();
  res.render('index', { results: json });
});

router.post('/', async (req, res) => {
  const title = req.body.title;
  const url = `https://owen-wilson-wow-api.onrender.com/wows/random?movie=${title}`;
  const results = await fetch(url);
  const json = await results.json();
  console.log(json);
});

module.exports = router;
