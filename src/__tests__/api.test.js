const { getRandomWows, getOrderedWows } = require('../api/api');

const mockedFetch = jest
  .spyOn(global, 'fetch')
  .mockImplementation(() =>
    Promise.resolve({ json: () => Promise.resolve([]) })
  );

describe('Get random wows', () => {
  it('should mock an API request for a list of random wows', async () => {
    const results = await getRandomWows();
    expect(mockedFetch).toHaveBeenCalledWith(
      'https://owen-wilson-wow-api.onrender.com/wows/random?results=5'
    );
    expect(Array.isArray(results)).toEqual(true);
    expect(results.length).toEqual(0);
  });
});

describe('Get ordered wows', () => {
  it('should mock an API request for an ordered set of results', async () => {
    const results = await getOrderedWows();
    expect(mockedFetch).toHaveBeenCalledWith(
      'https://owen-wilson-wow-api.onrender.com/wows/ordered/0-90'
    );
    expect(Array.isArray(results)).toEqual(true);
    expect(results.length).toEqual(0);
  });
});
