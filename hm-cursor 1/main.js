
let pricePhone = 123.965;
let priceBook = 15.678;
let priceEholot = 90.2345;

// 1
let maxPrice = Math.max(priceBook, priceEholot, pricePhone);
console.log("Max: " + maxPrice);
// 2
let minPrice = Math.min(priceBook, priceEholot, pricePhone);
console.log("Min: " + minPrice);
// 3
let suma = pricePhone + priceEholot + priceBook;
console.log("Suma: " + suma);
// 4
let sumaFloor = Math.floor(pricePhone) + Math.floor(priceBook) + Math.floor(priceEholot);
console.log("Suma floor: " + sumaFloor);
// 5
let sumaRound = Math.ceil(Math.round(suma) / 100) * 100;
console.log("Suma round: " + sumaRound);
// 6
let sumaBoolean = (Math.floor(suma) % 2) == 0;
console.log("Boolean suma: " + sumaBoolean);
// 7
let cashPerson = 500;
let remainder = cashPerson - suma;
console.log("Remainder: " + remainder);
// 8
let meduimSuma =  (suma / 3).toFixed(2);
console.log("Medium suma: " + meduimSuma);
// 9
let randomDiscount = Math.round(Math.random() * 100);
let sumaWihtDiscount = (suma - (suma * (randomDiscount / 100))).toFixed(2);
console.log("Suma with discount: " + sumaWihtDiscount);
let moneyDiscount = suma - sumaWihtDiscount;
let lostMoney = (suma / 2) - moneyDiscount;
console.log("Lost: " + lostMoney.toFixed(2));
lostMoney = lostMoney.toFixed(2);
// Advanced
let result = 
`
    Максимальна ціна: ${maxPrice};<br>
    Мінімальна ціна: ${minPrice};<br>
    Cума всіх товарів: ${suma};<br>
    Ціла сума округленна до min: ${sumaFloor};<br>
    Сума округлена до сотень: ${sumaRound};<br>
    Чи парна сума: ${sumaBoolean};<br>
    Здача: ${remainder};<br>
    Середня сума всіх товарів: ${meduimSuma};<br>
    <br>
    Рандомна знижка: ${randomDiscount};<br>
    Ціна зі знижкою: ${sumaWihtDiscount};<br>
    Втрачена вигода: ${lostMoney};<br>
`;

document.querySelector('.output').innerHTML = result;