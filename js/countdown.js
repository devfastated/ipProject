function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);

    return {
        total,
        minutes,
        seconds
    };
}




function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        const t = getTimeRemaining(endtime);

        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        const tryAgainButton = document.getElementById("tryAgain");

        if (t.total <= 0) {
            clearInterval(timeinterval);
            showResults();
            submitButton.style.display = 'none';
            previousButton.style.display = 'none';
            nextButton.style.display = 'none';
            tryAgainButton.style.display = 'inline-block';

        }
        else {
            tryAgainButton.style.display = 'none';

        }
    }

    updateClock();

    const timeinterval = setInterval(updateClock, 1000);




}




const deadline = new Date(Date.parse(new Date()) + 1 * 60 * 1000);
initializeClock('clockdiv', deadline);


// kani  kay mag reload sa page tapos mo balik sa una

const tryAgainButton = document.getElementById("tryAgain");
// variable na mo kuha sa id sa div nga tryagain para 
//magamit sa funtion unya ang function naay code e execute

// so mao nani ang function nga naka konek sa const tryAgainButton
function resetQuiz() {
    location.reload();// default method ni sya sa javascript
}
tryAgainButton.addEventListener("click", resetQuiz);











