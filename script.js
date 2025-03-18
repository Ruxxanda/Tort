// miscarea textului la reducere
const textTop = document.querySelector('.text-top');
const textBottom = document.querySelector('.text-bottom');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    const moveAmount = scrollPosition * 0.2;

    textTop.style.transform = `translateX(-${moveAmount}px)`;
    textBottom.style.transform = `translateX(-${moveAmount}px)`;
});



// expirare timpului de la sectiunea cu reducere
const timeElement = document.querySelector('.time');

let totalSeconds = 24 * 60 * 60;

function formatTime(seconds) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

const countdown = setInterval(() => {
    timeElement.textContent = formatTime(totalSeconds);

    if (totalSeconds <= 0) {
        clearInterval(countdown);
        timeElement.textContent = "Timp expirat!";
    }

    totalSeconds--;
}, 1000);





// schimbarea anilor
document.addEventListener('DOMContentLoaded', () => {
  const currentYear = new Date().getFullYear();
  document.getElementById('ani-container').textContent = currentYear;
});