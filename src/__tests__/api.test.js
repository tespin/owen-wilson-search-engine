const { getRandomWows, getPaginatedWows } = require('../api/api');

const mockedFetch = jest
  .spyOn(global, 'fetch')
  .mockImplementation(() =>
    Promise.resolve({ json: () => Promise.resolve([]) })
  );

describe('Get random wows', () => {
  it('should mock an API request for random wows', async () => {
    const json = await getRandomWows();
    expect(mockedFetch).toHaveBeenCalledWith(
      'https://owen-wilson-wow-api.onrender.com/wows/random?results=5'
    );
    expect(Array.isArray(json)).toEqual(true);
    expect(json.length).toEqual(0);
  });
});

describe('Get paginated wows', () => {
  it('should mock an API request for an object containing paginated results and total length', async () => {
    const { results } = await getPaginatedWows({
      input: 'foo',
      numPerPage: 5,
      page: 1,
    });
    expect(mockedFetch).toHaveBeenCalledWith(
      'https://owen-wilson-wow-api.onrender.com/wows/ordered/0-90'
    );
    expect(Array.isArray(results)).toEqual(true);
    expect(results.length).toEqual(0);
  });
});
