const { convertDate } = require('../utils/utils');

// retrieve a random set of 4 results from the api
const getRandomWows = async () => {
  const url = 'https://owen-wilson-wow-api.onrender.com/wows/random?results=4';
  const results = await fetch(url);
  const json = await results.json();
  return json;
};

// retrieve wows in an ordered list
const getOrderedWows = async () => {
  const url = 'https://owen-wilson-wow-api.onrender.com/wows/ordered/0-90';
  const results = await fetch(url);
  const json = await results.json();
  return json;
};

module.exports = {
  getRandomWows,
  getOrderedWows,
};
