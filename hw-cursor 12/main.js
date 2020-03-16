const BASE = 'https://swapi.co/api/';

async function getPersons(film) {
    try {
        const response = await axios.get(BASE + `films/${film}/`);
        let persons = [];
        const api = response.data.characters;
        api.forEach(url => {
            async function f() {
                const person = await axios.get(url);
                persons.push(person.data);
            }
            f();
        });
        return persons;
    } catch (e) {
        console.log(e);
    }

}

function renderPersons() {
    const  film = document.querySelector('.inputFilm').value;
    if(parseInt(film)>0 && parseInt(film)<=7){
        getPersons(film).then(persons => {
            let container = document.querySelector('.persons');
            container.innerHTML = '';
            persons.forEach(person => {
               let personDiv = document.createElement('div');
               personDiv.innerHTML = `
                    <h4>${person.name}</h4>
                    <h3>${person.birth_year}</h3>
                    <h3>${person.gender}</h3>
               `;
               personDiv.classList.add('person');
               container.append(personDiv);
            });
        });
    } else {
        alert('Введіть номер фільму;)');
    }
}

document.querySelector('.info').addEventListener('click', renderPersons);

