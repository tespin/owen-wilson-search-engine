const { getOrderedWows } = require('./api');
const { convertDate } = require('../utils/utils');

// retrieve a paginated array of wows
const getPaginatedWows = async (params, wows) => {
  const { input, numPerPage, page } = params;
  const filtered = wows.filter((item) => {
    return item.movie.toLowerCase().startsWith(input.toLowerCase());
  });

  let start = numPerPage * page - numPerPage;
  let end = start + numPerPage;

  const paginated = filtered.slice(start, end);

  return { results: paginated, totalLength: filtered.length };
};

// retrieve a specific wow and return its metadata
const getWowMetadata = async (params, wows) => {
  const { title, wowIndex } = params;
  const specificWow = wows.filter((item) => {
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

module.exports = { getPaginatedWows, getWowMetadata };
