const forecast = document.querySelector('.forecast');
const APIkey = "8e429daa5b2c1b82a6e187f2f61c7f05"
const searchHistory = [];
const city ='sacramento';

function getApi(city, APIkey) {
    const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
    fetch(queryURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayweather(data);
            console.log(data);
        });
}
function getforecast(city, APIkey) {
    const queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey;
    fetch(queryURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        });
}


const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', function(event) {
    event.preventDefault();
    getApi(city, APIkey);
    getforecast(city, APIkey);
});


// forecast days
const today = dayjs();
const forecastDays = [today, today.add(1, 'day'), today.add(2, 'day'), today.add(3, 'day'), today.add(4, 'day')];
console.log(forecastDays);







