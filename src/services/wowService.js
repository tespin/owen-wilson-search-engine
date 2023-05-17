const Api = require('../api/api');
const Wow = require('../api/Wow');

const getRandomWows = async () => {
  const randomWows = await Api.getRandomWows();
  return randomWows;
};

const getPaginatedWows = async (params) => {
  const orderedWows = await Api.getOrderedWows();
  const paginatedWows = Wow.getPaginatedWows(params, orderedWows);
  return paginatedWows;
};

const getWowMetadata = async (params) => {
  const orderedWows = await Api.getOrderedWows();
  const wowMetadata = Wow.getWowMetadata(params, orderedWows);
  return wowMetadata;
};

module.exports = {
  getRandomWows,
  getPaginatedWows,
  getWowMetadata,
};
