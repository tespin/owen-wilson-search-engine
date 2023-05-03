const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.render('views/index');
});
