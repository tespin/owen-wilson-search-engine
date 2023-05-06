const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', async (req, res) => {
  const title = req.body.title;
  const url = `https://owen-wilson-wow-api.onrender.com/wows/random?movie=${title}`;
  const results = await fetch(url);
  const json = await results.json();
  console.log(json);
});

module.exports = router;
