var timerCount = null;
var timerCountEx = null;
var miliseconds = null;
var timeSpan = new Date();
var timeSpanEx = new Date();
var stopWatch = null;
var stopWatchEx = null;
var timeDiff = 0;
var timeDiffEx = 0;
var result = null;
var results = [];


function init() {
    timerCount = document.querySelector('.stop-watch');
    timerCountEx = document.querySelector('.stop-watch-ex');
    miliseconds = document.querySelector('p');
    result = document.querySelector('.result');
    var timerButton = document.querySelector('.start');
    var resetButton = document.querySelector('.reset');
    var timerExButton = document.querySelector('.start-btn');
    var splitExButton = document.querySelector('.split-btn');
    var resetExButton = document.querySelector('.reset-btn');
    timerButton.addEventListener('click', timerClick);
    resetButton.addEventListener('click', resetClick);
    timerExButton.addEventListener('click', timerExClick);
    splitExButton.addEventListener('click', splitExClick);
    resetExButton.addEventListener('click', resetExClick);
}

function getTimeFromNum(ticks) {
    var diffSeconds = Math.floor(ticks / 1000);
    var diffMinutes = Math.floor(ticks / (1000 * 60));
    var diffHours = Math.floor(ticks / (1000 * 3600));
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
    var diffMilisecconds = ticks % 1000 + '';
    if (diffMilisecconds.length < 3) {
        var count = diffMilisecconds.length;
        for (var i = 0; i < count - 1; i++) {
            diffMilisecconds = '0' + diffMilisecconds;
        }
    }
    // console.log(diffHours + ':' + diffMinutes + ':' + diffSeconds + '.' + diffMilisecconds)
    var span = {
        hours: diffHours.toString(),
        minutes: diffMinutes.toString(),
        seconds: diffSeconds.toString(),
        miliseconds: diffMilisecconds.toString()
    };
    // console.log(span);
    return span;
}

function insertSplitTime(count, time) {
    var splitSpan = document.createElement('li');
    splitSpan.innerText = count + ' Stop: ' + time;
    result.appendChild(splitSpan);
}

function updateCounts() {
    var currentTime = new Date();
    timeDiff = Math.abs(currentTime - timeSpan);
    var span = getTimeFromNum(timeDiff);
    timerCount.innerText = span.hours + ':' + span.minutes + ':' + span.seconds;
    miliseconds.innerText = span.miliseconds;
}

function updateCountsEx() {
    var currentTime = new Date();
    timeDiffEx = Math.abs(currentTime - timeSpanEx);
    var span = getTimeFromNum(timeDiffEx);
    timerCountEx.innerText = span.hours + ':' + span.minutes + ':' + span.seconds + '.' + span.miliseconds;
}

function timerClick(event) {
    // console.log(stopWatch);
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

function timerExClick(event) {
    // console.log(stopWatchEx);
    if (stopWatchEx == null) {
        stopWatchEx = window.setInterval(updateCountsEx, 1);
        if (timeSpanEx == null) {
            timeSpanEx = Date.now() - timeDiffEx;
        }
        event.target.innerHTML = 'Stop';
    }
    else {
        if (results.length > 0) {
            var splitResult = getTimeFromNum(timeDiffEx - results[results.length - 1]);
            results.push(timeDiffEx);
            insertSplitTime(results.length, splitResult.hours + ':' + splitResult.minutes + ':' + splitResult.seconds + '.' + splitResult.miliseconds)
            console.log(splitResult);
        }
        else {
            results.push(timeDiffEx);
            var splitResult = getTimeFromNum(results[results.length - 1]);
            insertSplitTime(results.length, splitResult.hours + ':' + splitResult.minutes + ':' + splitResult.seconds + '.' + splitResult.miliseconds)
            console.log(splitResult);
        }
        window.clearInterval(stopWatchEx);
        stopWatchEx = null;
        timeSpanEx = null;
        event.target.innerHTML = 'Start';
    }
}

function splitExClick() {
    if (stopWatchEx != null) {
        if (results.length > 0) {
            var splitResult = getTimeFromNum(timeDiffEx - results[results.length - 1]);
            results.push(timeDiffEx);
            insertSplitTime(results.length, splitResult.hours + ':' + splitResult.minutes + ':' + splitResult.seconds + '.' + splitResult.miliseconds)
            console.log(splitResult);
        }
        else {
            results.push(timeDiffEx);
            var splitResult = getTimeFromNum(results[results.length - 1]);
            insertSplitTime(results.length, splitResult.hours + ':' + splitResult.minutes + ':' + splitResult.seconds + '.' + splitResult.miliseconds)
            console.log(splitResult);
        }
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

function resetExClick() {
    timerCountEx.innerText = '00:00:00.000';
    timeSpanEx = null;
    timeDiffEx = 0;
    results = [];
    result.innerHTML = '';
    if (stopWatchEx != null) {
        window.clearInterval(stopWatchEx);
        stopWatchEx = null;
        console.log(results);
    }
    document.querySelector('.start-btn').innerHTML = 'Start';
}

window.addEventListener('load', init);