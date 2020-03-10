function getSymbol() {
    let newTime = '';
    let time = Date.now().toString();
    time = +time.slice(time.length - 5, time.length);
    newTime = String.fromCharCode(time);
    return newTime;
}

function getRandomChinese(length) {
    let promise = new Promise((resolve) => {
        let str = '';
        let counter = length;
        let timer = setTimeout(function tick() {
            if(counter === 0){
                resolve(str);
            } else {
                str += getSymbol();
                timer = setTimeout(tick, 1000);
                counter--;
            }
        }, 1000);
    });
    return promise;
}
getRandomChinese(4).then((str) => {console.log(str)});

