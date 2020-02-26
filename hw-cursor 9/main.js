function generateRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}
function createDiv() {
    const box = document.querySelector('.box');
    const div = document.createElement('div');
    div.className = 'square';
    div.style.backgroundColor = generateRandomColor();
    box.append(div);
    setTimeout(() => {
        div.remove();
    },950);
}
function deleteDiv() {
    let square = document.querySelectorAll('.square');
    for (let i = 0; i < square.length; i++){
        square[i].remove();
    }
}
function generateBlocks() {
    for(let i = 0; i < 25; i++){
        createDiv();
    }
}
generateBlocks();

function generateBlocksInterval() {
    setInterval(() => {
        generateBlocks();
    }, 1000);
}
generateBlocksInterval();


