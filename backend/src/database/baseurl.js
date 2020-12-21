const axios = require('axios');

const baseurl = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
});

module.exports = baseurl;