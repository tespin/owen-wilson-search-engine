const app = require('../routes/app');
const request = require('supertest');

describe('GET /', () => {
  it('should render home page', async () => {
    const req = {};
    const res = { render: jest.fn() };
    expect(app.get('/', (req, res)).res.status).toEqual(200);
  });
});

// describe('controller', () => {
//   const req = {};
//   const res = { render: jest.fn()}
//   beforeAll(() => {
//     controller(req, res);
//   })
// })

// describe('Home', () => {
//   beforeAll(() => {
//     controller(req, res);
//   })

//   it('should render home page', async () => {
//     res = await request(app).get('/').send({ randomResults: [] });
//     expect(res.statusCode).toEqual(200);
//   });
// });
