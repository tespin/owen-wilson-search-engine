const Api = require('../api/api');
const Wow = require('../api/Wow');

const getRandomWows = async () => {
  try {
    const randomWows = await Api.getRandomWows();
    return randomWows;
  } catch (error) {
    throw error;
  }
};

const getPaginatedWows = async (params) => {
  try {
    const orderedWows = await Api.getOrderedWows();
    const paginatedWows = Wow.getPaginatedWows(params, orderedWows);
    return paginatedWows;
  } catch (error) {
    throw error;
  }
};

const getWowMetadata = async (params) => {
  try {
    const orderedWows = await Api.getOrderedWows();
    const wowMetadata = Wow.getWowMetadata(params, orderedWows);
    return wowMetadata;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getRandomWows,
  getPaginatedWows,
  getWowMetadata,
};
