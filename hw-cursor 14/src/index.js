import password from './homework3';
import makePairs from './homework4';
import replaceBadWords from './homework5';
import getBestStudent from './homework6';
import personsApi from './getPersonsApi';
import renderPersons from './renderPersons';

import './index.css';

console.log(password());
console.log(makePairs());
console.log(replaceBadWords('Are you fucking kidding?'));
console.log(getBestStudent());
personsApi().then(renderPersons);