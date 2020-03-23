import image from './img/stormtrooper.png'

const axios = require('axios');

export default function (personApi) {
    let container = document.querySelector('.persons');
    container.innerHTML = '';
    personApi.forEach(async url => {
        let person = await axios.get(url);
        let personDiv = document.createElement('div');
        personDiv.innerHTML = `
                <img src="${image}">
                <h4>${person.data.name}3</h4>
                <h5>${person.data.birth_year}</h5>
                <h5>${person.data.gender}</h5>
           `;
        personDiv.classList.add('person');
        container.append(personDiv);
    });
}