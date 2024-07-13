document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');

    function updateCounter() {
        fetch('/counter')
            .then(response => response.json())
            .then(data => {
                counterElement.textContent = data.count;
            });
    }

    incrementBtn.addEventListener('click', function() {
        fetch('/increment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            counterElement.textContent = data.count;
        });
    });

    updateCounter();
});
