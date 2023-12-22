document.addEventListener('DOMContentLoaded', function() {
    var points = 0;
    var clickButton = document.getElementById('clickButton');
    var counter = document.getElementById('counter');
    var popup = document.getElementById('popup');
    var percentageText = document.getElementById('percentage');

    clickButton.addEventListener('click', function() {
        points += 10;
        counter.textContent = 'Points: ' + points;
        
        if (points % 10 === 0) {
            var percentage = (points / 1350) * 100;
            percentageText.textContent = 'You have reached ' + percentage.toFixed(2) + '% of the goal.';
            popup.className = 'visible';
        }
    });
});
