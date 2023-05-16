const getRandomWows = async () => {
  const url = 'https://owen-wilson-wow-api.onrender.com/wows/random?results=5';
  const results = await fetch(url);
  const json = await results.json();
  return json;
};

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
