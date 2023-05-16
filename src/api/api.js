const { convertDate } = require('../utils/utils');

const getRandomWows = async () => {
  const url = 'https://owen-wilson-wow-api.onrender.com/wows/random?results=5';
  const results = await fetch(url);
  const json = await results.json();
  return json;
};

const getPaginatedWows = async (params) => {
  const { input, numPerPage, page } = params;
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

// router.get('/search/:page/movies', async (req, res) => {
//   const numPerPage = 5;
//   let page = req.params.page || 1;

//   const input = req.query.title;
//   const json = await getOrdered();
//   const updatedResults = json.filter((item) => {
//     return item.movie.toLowerCase().startsWith(input.toLowerCase());
//   });

//   const length = updatedResults.length;

//   let start = numPerPage * page - numPerPage;
//   let end = start + numPerPage;
//   let paginatedResults = updatedResults.slice(start, end);

//   res.render('search/movies', {
//     results: paginatedResults,
//     current: page,
//     pages: Math.ceil(length / numPerPage),
//     searchTerm: input,
//   });
// });

module.exports = {
  getRandomWows,
  getPaginatedWows,
  getWowMetadata,
};
