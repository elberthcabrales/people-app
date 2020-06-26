const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://api.salesloft.com/v2',
    timeout: 2000,
    headers: {'Authorization': `Bearer ${process.env.KEY}`}
})

module.exports = instance