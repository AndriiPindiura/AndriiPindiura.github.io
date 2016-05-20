var timerCount = null;
var miliseconds = null;
var timeSpan = new Date();
var stopWatch = null;
var timeDiff = 0;


var options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

function init() {
    timerCount = document.querySelector('h1');
    miliseconds = document.querySelector('p');
    var timerButton = document.querySelector('.start');
    timerButton.addEventListener('click', timerClick);
    var resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', resetClick);
}

function updateCounts() {

    var currentTime = new Date();
    timeDiff = Math.abs(currentTime - timeSpan);

    var diffSeconds = Math.floor(timeDiff / 1000);
    var diffMinutes = Math.floor(timeDiff / (1000 * 60));
    var diffHours = Math.floor(timeDiff / (1000 * 3600));
    if (diffSeconds > 59) {
        diffSeconds = diffSeconds % 60;
    }
    if (diffSeconds < 10) {
        diffSeconds = '0' + diffSeconds;
    }
    if (diffMinutes > 59) {
        diffMinutes = diffMinutes % 60;
    }
    if (diffMinutes < 10) {
        diffMinutes = '0' + diffMinutes;
    }
    if (diffHours > 59) {
        diffHours = diffHours % 60;
    }
    if (diffHours < 10) {
        diffHours = '0' + diffHours;
    }
    timerCount.innerText = diffHours + ':' + diffMinutes + ':' + diffSeconds;
    miliseconds.innerText = (timeDiff % 1000);
    var diffMilisecconds = timeDiff % 1000 + '';
    if (diffMilisecconds.length < 3) {
        var count = diffMilisecconds.length;
        for (var i = 0; i < count - 1; i++) {
            diffMilisecconds = '0' + diffMilisecconds;
        }
    }
    // miliseconds.innerText = (timeDiff % 1000);
    miliseconds.innerText = diffMilisecconds;
}

function timerClick(event) {
    console.log(stopWatch);
    if (stopWatch == null) {
        stopWatch = window.setInterval(updateCounts, 1);
        if (timeSpan == null) {
            timeSpan = Date.now() - timeDiff;
        }
        event.target.innerHTML = 'Pause';
    }
    else {
        window.clearInterval(stopWatch);
        stopWatch = null;
        timeSpan = null;
        event.target.innerHTML = 'Continiue';
    }
}

function resetClick() {
    miliseconds.innerText = 0;
    timerCount.innerText = '00:00:00';
    timeSpan = null;
    timeDiff = 0;
    if (stopWatch != null) {
        window.clearInterval(stopWatch);
        stopWatch = null;
    }
    document.querySelector('.start').innerHTML = 'Start';
}

window.addEventListener('load', init);