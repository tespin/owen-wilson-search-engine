const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.render('index');
});
