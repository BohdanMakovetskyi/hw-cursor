function playMusic (event) {
    const audio = document.getElementById(`${event.keyCode}`);
    audio.currentTime = 0;
    audio.play();
    const square = document.querySelector(`.${event.key.toUpperCase()}`);
    square.classList.add('square_press');
    setTimeout(() => {
       square.classList.remove('square_press');
    },200);
}
document.addEventListener('keydown', playMusic);
