const express = require('express');
const path = require('path');
const app = express();
const appRouter = require('./routes/app');

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use('/', appRouter);
