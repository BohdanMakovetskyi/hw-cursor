const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
    return parseInt(salary) * parseFloat(this.tax);
}
console.log('Task 1:');
console.log(getMyTaxes.call(ukraine, 31357));

function getMiddleTaxes() {
    return parseFloat(this.tax) * parseFloat(this.middleSalary);
}
console.log('Task 2:');
console.log(getMiddleTaxes.call(latvia));

function getTotalTaxes() {
    return parseFloat(this.tax) * parseFloat(this.middleSalary) * parseFloat(this.vacancies);
}
console.log('Task 3:');
console.log(getTotalTaxes.call(litva));

function getMySalary(country) {
    let result = {};
    let randomSalary = Math.floor(Math.random() * (2000 - 1500) + 1500);
    result.salary = randomSalary;
    result.taxes = parseFloat((country.tax * randomSalary).toFixed(2));
    result.profit = parseFloat((result.salary - result.taxes).toFixed(2));
    return console.log(result);
}
console.log('Task 4:');
let timerId = setTimeout(function tick() {
    getMySalary(ukraine);
    timerId = setTimeout(tick, 2000);
}, 2000);