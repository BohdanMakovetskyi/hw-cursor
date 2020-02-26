const classes = ['red', 'yellow', 'black', 'pink', 'green', 'white', 'grey', 'orange', 'red_', 'yellow_', 'black_', 'green_', 'orange_'];

function generateBlocks() {
    let box = document.querySelector('body');
    box.innerHTML = `
        <div class = 'box'>
            <div class="row">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
            </div>
            <div class="row">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
            </div>
            <div class="row">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
            </div>
            <div class="row">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
            </div>
            <div class="row">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
            </div>
        </div>
    `;
    let square = document.querySelectorAll('.square');
    square.forEach(el => {
        let classForSquare = Math.floor(Math.random() * (classes.length - 1) + 1);
        el.classList.add(classes[classForSquare]);
    });
}
generateBlocks();

function generateBlocksInterval() {
    let square = document.querySelectorAll('.square');
    setInterval(() => {
        square.forEach(el => {
            let classForSquare = Math.floor(Math.random() * (classes.length - 1) + 1);
            el.className = 'square ' + classes[classForSquare];
        });
    }, 1000);
}
generateBlocksInterval();


