const BASE = 'https://swapi.co/api/';

async function getPersons() {
    try {
        const film = document.querySelector('.inputFilm').value;
        if(parseInt(film)>0 && parseInt(film)<=7){
            const response = await axios.get(BASE + `films/${film}/`);
            const api = response.data.characters;
            let container = document.querySelector('.persons');
            container.innerHTML = '';
            api.forEach(url => {
                async function f() {
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
                }
                f();
            });
        } else {
            alert('Введіть номер фільму;)');
        }
    } catch (e) {
        console.log(e);
    }

}

async function getPlanets(api = `${BASE}planets/?page=1`) {
    try {
        const response = await axios.get(api);
        let planets = response.data.results;
        let container = document.querySelector('.planets');
        container.innerHTML = '';
        for (let i = 0; i < planets.length; i++){
            let planet = document.createElement('h3');
            planet.innerHTML = `
                ${i+1}: ${planets[i].name}
            `;
            container.append(planet);
        }
    } catch (e) {
        console.log(e);
    }
}
getPlanets();

let i = 1;
document.querySelector('.next').addEventListener('click', function () {
    i++;
    if(i === 8){
        i = 7;
    }
    getPlanets(BASE + `planets/?page=${i}`);
    document.querySelector('.back').addEventListener('click', function () {
        i--;
        if(i === 0) {
            i = 1;
        }
        getPlanets(BASE + `planets/?page=${i}`);
    });
});
document.querySelector('.info').addEventListener('click', getPersons);
