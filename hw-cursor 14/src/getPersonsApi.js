const axios = require('axios');
const BASE = 'https://swapi.co/api/';

export default async function() {
    const response = await axios.get(BASE + `films/2/`);
    return response.data.characters;
}