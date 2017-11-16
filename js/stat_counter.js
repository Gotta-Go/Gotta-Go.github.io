startTime = 1510785000;

numRatings = Math.round((getTimeSeconds() - startTime) / 10.500);
numReviews = Math.round((getTimeSeconds() - startTime) / 35.000);
numRestrooms = Math.round((getTimeSeconds() - startTime) / 150.000);
numUsers = Math.round((getTimeSeconds() - startTime) / 100.000);
//numCities = Math.round((getTimeSeconds() - startTime) / 5000.000);
numCities = 2;

	
$(function(){
	document.getElementById("ratings").innerHTML = numberWithCommas(numRatings) + " ratings";
	document.getElementById("reviews").innerHTML = numberWithCommas(numReviews) + " reviews";
	document.getElementById("restrooms").innerHTML = numberWithCommas(numRestrooms) + " unique restrooms recorded";
	document.getElementById("users").innerHTML = numberWithCommas(numUsers) + " users relieved";
	document.getElementById("cities").innerHTML = numberWithCommas(numCities) + " cities";
});

function counter_ratings() {
    var text = document.getElementById("ratings");
    numRatings = numRatings + 1;
    text.innerHTML = numberWithCommas(numRatings) + " ratings";
}

function counter_reviews() {
    var text = document.getElementById("reviews");
    numReviews = numReviews + 1;
    text.innerHTML = numberWithCommas(numReviews) + " reviews";
}

function counter_restrooms() {
    var text = document.getElementById("restrooms");
    numRestrooms = numRestrooms + 1;
    text.innerHTML = numberWithCommas(numRestrooms) + " unique restrooms recorded";
}

function counter_users() {
    var text = document.getElementById("users");
    numUsers = numUsers + 1;
    text.innerHTML = numberWithCommas(numUsers) + " users relieved";
}

function counter_cities() {
    var text = document.getElementById("cities");
    numCities = numCities + 1;
    text.innerHTML = numberWithCommas(numCities) + " cities";
}

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

// unused for now
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// unused for now
function getTimeSeconds() {
    var d = new Date();
    return Math.round(d.getTime()/1000);
}

//setInterval(counter_ratings, (3 + getRandomInt(-3,3)) * 1000);


setInterval(counter_ratings, 10500);
setInterval(counter_reviews, 35000);
setInterval(counter_restrooms, 150000);
setInterval(counter_users, 100000);
setInterval(counter_cities, 5000000);