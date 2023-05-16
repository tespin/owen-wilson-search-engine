const wowService = require('../services/wowService');

const indexController = async (req, res) => {
  const randomWows = await wowService.getRandomWows();
  res.render('index', { randomResults: randomWows });
};

const searchController = async (req, res) => {
  const numPerPage = 5;
  let page = req.params.page || 1;
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
};

const metadataController = async (req, res) => {
  const title = decodeURIComponent(req.params.title).toLowerCase();
  const wowIndex = Number(req.params.wowIndex);

  const wowMetadata = await wowService.getWowMetadata({ title, wowIndex });

  res.render('moviePage', { metadata: wowMetadata });
};

module.exports = {
  indexController,
  searchController,
  metadataController,
};
