let numberN = +(prompt('Enter N(start):'));
let numberM = +(prompt('Enter M(finish):'));

if (parseFloat(numberN) - parseInt(numberN) !== 0 || parseFloat(numberM) - parseInt(numberM) !== 0) {
    alert('It is not a normal number!');
} else {
    let evenNumber = confirm('You want to miss even numbers?');
    let sumNumbers = 0;
    let result = ``;
    if (evenNumber) {
        for (let i = numberN; i <= numberM; i++) {
            if (i % 2 === 0) {
                continue;
            } else {
                sumNumbers = sumNumbers + i;
            }
        }
        console.log("Sum your numbers with out even: " + (sumNumbers));
        result = `
            Sum your numbers with out even: ${sumNumbers};
        `;
    } else {
        for (let j = numberN; j <= numberM; j++) {
            sumNumbers = sumNumbers + j;
        }
        console.log("Sum your numbers: " + (sumNumbers));
        result = `
            Sum your numbers: ${sumNumbers};
        `;
    }
    document.querySelector(".output").innerHTML = result;
}

