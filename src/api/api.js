const { convertDate } = require('../utils/utils');

// retrieve a random set of 4 results from the api
const getRandomWows = async (params) => {
  try {
    const url = `https://owen-wilson-wow-api.onrender.com/wows/random?results=${params.numWows}`;
    const results = await fetch(url);
    const json = await results.json();
    return json;
  } catch (error) {
    throw error;
  }
};

// retrieve wows in an ordered list
const getOrderedWows = async () => {
  try {
    const url = 'https://owen-wilson-wow-api.onrender.com/wows/ordered/0-90';
    const results = await fetch(url);
    const json = await results.json();
    return json;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getRandomWows,
  getOrderedWows,
};
