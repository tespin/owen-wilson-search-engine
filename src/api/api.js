const { convertDate } = require('../utils/utils');

// retrieve a random set of 5 results from the api
const getRandomWows = async () => {
  const url = 'https://owen-wilson-wow-api.onrender.com/wows/random?results=5';
  const results = await fetch(url);
  const json = await results.json();
  return json;
};

// retrieve a paginated array of results
const getPaginatedWows = async (params) => {
  const { input, numPerPage, page } = params;

  // we request an ordered set of results from the api so that each page
  // renders the same results, even when navigating between different pages
  const url = 'https://owen-wilson-wow-api.onrender.com/wows/ordered/0-90';
  const results = await fetch(url);
  const json = await results.json();
  const filtered = json.filter((item) => {
    return item.movie.toLowerCase().startsWith(input.toLowerCase());
  });

  let start = numPerPage * page - numPerPage;
  let end = start + numPerPage;

  const paginated = filtered.slice(start, end);

  return { results: paginated, totalLength: filtered.length };
};

// retrieve a specific wow and return its metadata
const getWowMetadata = async (params) => {
  const { title, wowIndex } = params;
  const url = 'https://owen-wilson-wow-api.onrender.com/wows/ordered/0-90';
  const results = await fetch(url);
  const json = await results.json();
  const specificWow = json.filter((item) => {
    return (
      item.movie.toLowerCase() === title &&
      item.current_wow_in_movie === wowIndex
    );
  })[0];

  const wowMetadata = {
    title: specificWow.movie,
    release: convertDate(specificWow.release_date),
    src: specificWow.video['720p'],
    director: specificWow.director,
    character: specificWow.character,
  };

  return wowMetadata;
};

module.exports = {
  getRandomWows,
  getPaginatedWows,
  getWowMetadata,
};
