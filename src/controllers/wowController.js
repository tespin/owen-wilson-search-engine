const wowService = require('../services/wowService');

// render the index page with random wows
const indexController = async (req, res) => {
  try {
    const randomWows = await wowService.getRandomWows();
    res.render('index', { randomResults: randomWows });
  } catch (error) {
    res.send({ error: error });
  }
};

// render a search results page with the given numPerPage, current page number, and search input
const searchController = async (req, res) => {
  try {
    const numPerPage = 4;
    const page = req.params.page || 1;
    const input = req.query.title;

    let { results, totalLength } = await wowService.getPaginatedWows({
      input,
      numPerPage,
      page,
    });

    res.render('search/movies', {
      results: results,
      current: page,
      pages: Math.ceil(totalLength / numPerPage),
      searchTerm: input,
    });
  } catch (error) {
    res.send({ error: error });
  }
};

// render a movie page with retrieved metadata
const metadataController = async (req, res) => {
  try {
    const title = decodeURIComponent(req.params.title).toLowerCase();

    // there can be multiple wows in certain movies, so we specify an index
    // for a specific wow
    const wowIndex = Number(req.params.wowIndex);

    const wowMetadata = await wowService.getWowMetadata({ title, wowIndex });

    res.render('moviePage', { metadata: wowMetadata });
  } catch (error) {
    res.send({ error: error });
  }
};

module.exports = {
  indexController,
  searchController,
  metadataController,
};
