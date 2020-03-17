function* createIdGenerator() {
    let i = 1;
    while (true){
        yield i;
        i++;
    }
}
const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

console.log('------------------------------------------------------');

function*  newFontGenerator(value) {
    while (true){
        let number = yield value;
        if(number === 'up'){
            value += 2;
        } else if(number === 'down') {
            value -= 2;
        }
    }
}
const fontGenerator = newFontGenerator(14);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);