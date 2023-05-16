const { getRandom, getOrdered } = require('../utils/utils');

const mockedFetch = jest
  .spyOn(global, 'fetch')
  .mockImplementation(() =>
    Promise.resolve({ json: () => Promise.resolve([]) })
  );

describe('Get random wows', () => {
  it('should mock an API request for random wows', async () => {
    const json = await getRandom();
    expect(mockedFetch).toHaveBeenCalledWith(
      'https://owen-wilson-wow-api.onrender.com/wows/random?results=5'
    );
    expect(Array.isArray(json)).toEqual(true);
    expect(json.length).toEqual(0);
  });
});

describe('Get ordered wows', () => {
  it('should mock an API request for ordered wows', async () => {
    const json = await getOrdered();
    expect(mockedFetch).toHaveBeenCalledWith(
      'https://owen-wilson-wow-api.onrender.com/wows/ordered/0-90'
    );
    expect(Array.isArray(json)).toEqual(true);
    expect(json.length).toEqual(0);
  });
});
