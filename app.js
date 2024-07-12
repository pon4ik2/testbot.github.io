document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');

    let count = 0;

    incrementBtn.addEventListener('click', () => {
        count++;
        counterElement.textContent = count;
    });
});
