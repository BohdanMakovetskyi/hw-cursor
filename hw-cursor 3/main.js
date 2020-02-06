// function 1
function getMaxNumber(number) {
    number = number.toString();
    let max = 0;
    for (let i = 0; i < number.length; i++) {
        if (max < number[i]) {
            max = number[i];
        }
    }
    return max;
}

// function 2
function pow(number, exp) {
    let i = 1;
    let result = number;
    while (i < exp) {
        result *= number;
        i++;
    }
    return result;
}

// function 3
function getCorectName(name) {
    name = name.toLowerCase();
    let nameSlice = name.slice(1, name.length);
    let corectName = name[0].toUpperCase() + nameSlice;
    return corectName;
}

// function 4
sumWithoutTax = (sum) => sum = sum - (sum * 0.195);

// function 5
getRandomNumber = (leftNumber, rightNumer) => Math.floor(Math.random() * (rightNumer - leftNumber) + leftNumber);

// function 6
function countLatter(latter, str) {
    str = str.toString();
    latter = latter.toString();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === latter) {
            count++;
        }
    }
    return count;
}

// function 7
function convertCurrency(str) {
    str = str.toString();
    let charDollars = '$';
    let uahMoney = 'UAH';
    if (str[str.length - 1] === charDollars) {
        return parseInt(str) * 25;
    } else if (str[str.length - 3] === uahMoney[0] && str[str.length - 2] === uahMoney[1] && str[str.length - 1] === uahMoney[2]) {
        return parseInt(str) / 25;
    } else {
        return 'there isnt "$" or "uah"!'
    }
}

// funtcion 8 
function getRandomPassword(passwordLength = 8) {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += Math.floor(Math.random() * 10);
    }
    return password;
}

// function 9
function deleteLatters(latter, str) {
    latter = latter.toString();
    str = str.toString();
    let newStr = '';
    for(let i = 0; i < str.length; i++){
        if(str[i] === latter){
            continue; 
        }
        else {
            newStr += str[i];
        }
    }
    return newStr;
}

// function 10
function isPolindrom(str) {
    str = str.toString();
    let reversedStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        reversedStr += str[i];
    }
    if(str === reversedStr){
        return true;
    } else return false;
}

// function 11 
function deleteLattersWhoSeeMore(str) {
    str = str.toString();
    str = str.toLowerCase();
    let newStr = '';
    for(let i = 0; i < str.length; i++){
        let count = 0;
        for(let j = 0; j < str.length; j++){
            if(str[i] === str[j]){
                count++;
            }
        }
        if(count < 2){
            newStr += str[i];
        }
    }
    return newStr;
}

let result = `
    Функція 1 вхідні(123425238): ${getMaxNumber(123425238)};<br>
    Функція 2 вхідні(3, 4): ${pow(3, 4)};<br>
    Функція 3 вхідні('boHDAn'): ${getCorectName('boHDAn')};<br>
    Функція 4 вхідні(2034): ${sumWithoutTax(2034)};<br>
    Функція 5 вхідні(100, 1000): ${getRandomNumber(100, 1000)};<br>
    Функція 6 вхідні('a','Bohdan like programing'): ${countLatter('a','Bohdan like programing')};<br>
    Функція 7 вхідні('254$'): ${convertCurrency('254$')};<br>
    Функція 8 вхідні(12): ${getRandomPassword(12)};<br>
    Функція 9 вхідні('a','Bohdan like programing'): ${deleteLatters('a','Bohdan like programing')};<br>
    Функція 10 вхідні('madam'): ${isPolindrom('madam')};<br>
    Функція 11 вхідні('Бісквіт був дуже ніжний'): ${deleteLattersWhoSeeMore('Бісквіт був дуже ніжний')};<br>
`;
document.querySelector('.output').innerHTML = result;
