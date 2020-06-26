const axios = require('../../services/axios')
const MockAdapter = require("axios-mock-adapter");

describe('Axios test', ()=>{
    const mock = new MockAdapter(axios)
    const endpoint = '/people.json?params'
    it('get request', async ()=>{
        mock.onGet(endpoint).reply(200,{
            data: [{}]
        })
        const result = await axios.get(endpoint);
        expect(result.status).toBe(200)
        expect(result.data).toBeTruthy()
    })
})