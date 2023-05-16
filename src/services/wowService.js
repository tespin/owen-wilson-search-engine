const api = require('../api/api');

const getRandomWows = async () => {
  const randomWows = await api.getRandomWows();
  return randomWows;
};

const getPaginatedWows = async (params) => {
  const paginatedWows = await api.getPaginatedWows(params);
  return paginatedWows;
};

const getWowMetadata = async (params) => {
  const wowMetadata = await api.getWowMetadata(params);
  return wowMetadata;
};

module.exports = {
  getRandomWows,
  getPaginatedWows,
  getWowMetadata,
};
