'use strict'

var gday = document.getElementById('timeWelcome');
var timeOf = new Date();
var time = timeOf.getHours();

if (time >= 0 && time < 12) {
    gday.innerText = "Good Morning";
} else if (time >= 12 && time < 18) {
    gday.innerText = "Good Afternoon";
} else if (time >= 18 && time <= 23) {
    gday.innerText = "Good Evening";
}

