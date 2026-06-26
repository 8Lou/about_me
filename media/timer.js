/**
 * Общий таймер для медитационных страниц
 * Запускает аудио, видео и таймер обратного отсчёта по клику на кнопку
 */

const button = document.querySelector('#myButton');
const player = document.querySelector('#player');
const video = document.querySelector('#myVideo');
const countdownEl = document.querySelector('#countdown');

const timerMinutes = 5;
let amountTime = timerMinutes * 60;
let timerId = null;
let isRunning = false;

button.addEventListener('click', function() {
    if (isRunning) return;
    
    isRunning = true;
    
    // Запускаем аудио и видео
    if (player) player.play();
    if (video) video.play();
    
    // Запускаем таймер
    timerId = setInterval(calculateTime, 1000);
});

function calculateTime() {
    if (amountTime <= 0) {
        stopTimer();
        countdownEl.textContent = "Time's up!";
        return;
    }
    
    amountTime--;
    
    let minutes = Math.floor(amountTime / 60);
    let seconds = amountTime % 60;
    
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    countdownEl.textContent = `${minutes} : ${seconds}`;
}

function stopTimer() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }
    isRunning = false;
    
    // Останавливаем аудио и видео
    if (player) player.pause();
    if (video) video.pause();
}
