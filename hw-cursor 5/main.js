// function 1
function getRandomArray(lenght, min, max) {
    let array = [];
    for (let i = 0; i < lenght; i++) {
        array[i] = Math.floor(Math.random() * (max - min)) + min;
    }
    return array;
}
console.log('Task 1:');
console.log(getRandomArray(8, 1, 100));

// function 2
function getModa(...numbers) {
    const correctArray = numbers.filter(char => (parseFloat(char) - parseInt(char)) === 0);
    let arrayCount = [];
    let result = [];
    let max = 0;
    for(let i = 0; i < correctArray.length; i++){
        let count = 0;
        for(let j = 0; j < correctArray.length; j++){
            if(correctArray[i] === correctArray[j]) {
                count++;
            }
        }
        arrayCount[i] = [correctArray[i],count];
    }
    for(let i = 0; i < arrayCount.length; i++){
        if(arrayCount[i][1] > max){
            max = arrayCount[i][1];
        }
    }
    arrayCount.filter(el => {
        if(el[1] === max ){
            if(!result.includes(el[0])){
                result.push(el[0]);
            }
        }
    });
    if(result.length > 1){
        return result;
    } else {
        return result[0];
    }
}
console.log('Task 2:');
console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// function 3
function getAverage(...numbers) {
    const correctArray = numbers.filter(char => (parseFloat(char) - parseInt(char)) === 0);
    return (correctArray.reduce((accumulator,currentValue) => accumulator + currentValue, 0))/correctArray.length;
}
console.log('Task 3:');
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// function 4
function getMediana(...numbers){
    const correctArray = numbers.filter(char => (parseFloat(char) - parseInt(char)) === 0);
    const sortCorrectArray = correctArray.sort((a,b) => a - b);
    if(sortCorrectArray.length % 2 === 0){
        return (sortCorrectArray[(sortCorrectArray.length/2) - 1] + sortCorrectArray[sortCorrectArray.length/2]) / 2;
    } else {
        return sortCorrectArray[Math.floor(sortCorrectArray.length/2)];
    }
}
console.log('Task 4:');
console.log(getMediana(1, 2, 3, 4));

// function 5
function filterNumbers(...numbers) {
    return numbers.filter(el => ((parseFloat(el) - parseInt(el)) === 0) && el % 2);
}
console.log('Task 5:');
console.log(filterNumbers(1,2,3,4,5,6));

// function 6
function countPositiveNumbers(...numbers) {
    const correctArray = numbers.filter(char => (parseFloat(char) - parseInt(char)) === 0);
    return  correctArray.reduce((sum, value) => {
       if(value > 0){
           sum++;
       }
       return sum;
    }, 0);
}
console.log('Task 6:');
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

// function 7
function getDividedByFive(...numbers) {
    const correctArray = numbers.filter(char => (parseFloat(char) - parseInt(char)) === 0);
    return correctArray.filter(el => el % 5 === 0);
}
console.log('Task 7:');
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// function 8
function replaceBadWords(string) {
    let badWords = ['shit', 'fuck'];
    let arrayWords = string.split(' ');
    for(let i = 0; i < badWords.length; i++) {
        arrayWords = arrayWords.map((value) => {
            return value.replace(badWords[i], '*'.repeat(badWords[i].length));
        });
    }
    return arrayWords.join(' ');
}
console.log('Task 8:');
console.log(replaceBadWords('Are you fucking kidding?'));

// function 9
function divideByThree(word) {
    let i = 0, j = 0, c = word.length;
    let temp = [];
    if(c <= 3) {
        return word;
    } else {
        while(c > 0){
            temp[j] = word.slice(i,i+3);
            c -= 3;
            j++;
            i += 3;
        }
        return temp;
    }
}
console.log('Task 9:');
console.log(divideByThree('liven'));

// function 10
function make(arr, el) {
    let i, i_m, item;
    let len = arr.length;
    let res = [];

    for(i = len; i >= 0; i--) {
        res.push(
            ([]).concat(
                arr.slice(0, i),
                [el],
                arr.slice(i, i_m)
            )
        );
    }
    return res;
}
function generateCombinations(arr) {
    let prev, curr, el, i;
    let len = arr.length;

    curr = [[arr[0]]];

    for(i = 1; i < len; i++) {
        el = arr[i];
        prev = curr;
        curr = [];

        prev.forEach(function(item) {
            curr = curr.concat(
                make(item, el)
            );
        });
    }
    return curr;
}
console.log('Take 10:');
console.log(generateCombinations('wadding'));






