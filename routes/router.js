const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', async (req, res) => {
  const url = 'https://owen-wilson-wow-api.onrender.com/wows/random';
  const results = await fetch(url);
  const json = results.json();
  console.log(json);
});

module.exports = router;
