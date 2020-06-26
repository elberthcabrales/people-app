const request = require('supertest');
const app = require('../../app')
const UrlEndpoint = '/people'
describe(UrlEndpoint, () => {
    it('GET', async()=>{
        const response = await request(app).get(UrlEndpoint);
        expect(response.statusCode).toEqual(200);
        expect(response.body[0]).toHaveProperty("id")
    })
})