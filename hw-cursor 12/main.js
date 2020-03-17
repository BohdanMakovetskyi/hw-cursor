const BASE = 'https://swapi.co/api/';
const config = {
    params: {
        page: numberPage = 1
    }
};

async function getPersons() {
    try {
        const film = document.querySelector('.inputFilm').value;
        if(parseInt(film) > 0 && parseInt(film) <= 7) {
            const response = await axios.get(BASE + `films/${film}/`);
            return response.data.characters;
        } else {
            alert('Введіть номер фільму;)');
        }
    } catch (e) {
        console.log(e);
    }
}

function drawPerson(personApi) {
    let container = document.querySelector('.persons');
    container.innerHTML = '';
    personApi.forEach(async url => {
        let person = await axios.get(url);
        let personDiv = document.createElement('div');
        personDiv.innerHTML = `
                <img src="./img/stormtrooper.png">
                <h4>${person.data.name}3</h4>
                <h5>${person.data.birth_year}</h5>
                <h5>${person.data.gender}</h5>
           `;
        personDiv.classList.add('person');
        container.append(personDiv);
    });
}

async function getPlanets(config) {
    try {
        const response = await axios.get(BASE + 'planets/', config);
        let planets = response.data.results;
        let container = document.querySelector('.planets');
        container.innerHTML = '';
        let i = 1;
        planets.forEach(planet => {
            let planetElement = document.createElement('h3');
            planetElement.innerHTML = `
                ${i}: ${planet.name}
            `;
            i++;
            container.append(planetElement);
        });
    } catch (e) {
        console.log(e);
    }
}
getPlanets(config).then();

document.querySelector('.next').addEventListener('click', function () {
    config.params.page++;
    if(config.params.page <= 7) {
        getPlanets(config).then();
    } else {
        config.params.page = 7;
        getPlanets(config).then();
    }
});
document.querySelector('.back').addEventListener('click', function () {
    config.params.page--;
    if(config.params.page >= 1) {
        getPlanets(config).then();
    } else {
        config.params.page = 1;
        getPlanets(config).then();
    }
});
document.querySelector('.info').addEventListener('click', () => {
    getPersons().then(drawPerson);
});
