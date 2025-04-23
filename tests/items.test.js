// describe("description", () => {
//     it('some description', async () => {
//     stmts...
//      })
//      expect(something).someMatchers(something);
// })

const app = require("../src/index");

describe('GET /health', () => {
  it('should return status OK', async () => {
    const respone = await request(app)
      .get('/health');
    expect(app.response.statusCode).toBe(200);
    expect(app.response.body).toEqual({ status: OK })

  })
})