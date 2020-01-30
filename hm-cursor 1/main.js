
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
let sum = pricePhone + priceEholot + priceBook;
console.log("Sum: " + sum);
// 4
let sumFloor = Math.floor(pricePhone) + Math.floor(priceBook) + Math.floor(priceEholot);
console.log("Sum floor: " + sumFloor);
// 5
let sumRound = Math.round(Math.round(sum) / 100) * 100;
console.log("Sum round: " + sumRound);
// 6
let sumBoolean = (Math.floor(sum) % 2) == 0;
console.log("Boolean sum: " + sumBoolean);
// 7
let cashPerson = 500;
let remainder = cashPerson - sum;
console.log("Remainder: " + remainder);
// 8
let meduimSum =  (sum / 3).toFixed(2);
console.log("Medium sum: " + meduimSum);
// 9
let randomDiscount = Math.round(Math.random() * 100);
let sumWihtDiscount = (sum - (sum * (randomDiscount / 100))).toFixed(2);
console.log("Sum with discount: " + sumWihtDiscount);
let moneyDiscount = sum - sumWihtDiscount;
let lostMoney = (sum / 2) - moneyDiscount;
console.log("Lost: " + Math.floor(lostMoney));
lostMoney = Math.floor(lostMoney);
// Advanced
let result = 
`
    Максимальна ціна: ${maxPrice};<br>
    Мінімальна ціна: ${minPrice};<br>
    Cума всіх товарів: ${sum};<br>
    Ціла сума округленна до min: ${sumFloor};<br>
    Сума округлена до сотень: ${sumRound};<br>
    Чи парна сума: ${sumBoolean};<br>
    Здача: ${remainder};<br>
    Середня сума всіх товарів: ${meduimSum};<br>
    <br>
    Рандомна знижка: ${randomDiscount}%;<br>
    Ціна зі знижкою: ${sumWihtDiscount};<br>
    Втрачена вигода: ${lostMoney};<br>
`;

document.querySelector('.output').innerHTML = result;