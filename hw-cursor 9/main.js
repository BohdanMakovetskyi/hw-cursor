function generateBlocks() {
    const classes = ['red', 'yellow', 'black', 'pink', 'green', 'white', 'grey', 'orange', 'red_', 'yellow_', 'black_', 'green_', 'orange_'];
    let square = document.querySelectorAll('.square');
    square.forEach(el => {
        let classForSquare = Math.floor(Math.random() * (classes.length - 1) + 1);
        el.classList.add(classes[classForSquare]);
    });
}
generateBlocks();

function generateBlocksInterval() {
    const classes = ['red', 'yellow', 'black', 'pink', 'green', 'white', 'grey', 'orange', 'red_', 'yellow_', 'black_', 'green_', 'orange_'];
    let square = document.querySelectorAll('.square');
    setInterval(() => {
        square.forEach(el => {
            let classForSquare = Math.floor(Math.random() * (classes.length - 1) + 1);
            el.className = 'square ' + classes[classForSquare];
        });
    }, 1000);
}
generateBlocksInterval();


