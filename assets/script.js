const forecast = document.querySelector('.forecast');
const APIkey = "8e429daa5b2c1b82a6e187f2f61c7f05"
// const searchHistory = [];
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
function getForecast(city, APIkey) {
    const queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey;
    fetch(queryURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        });
}

function displayweather(data) {
const forecastContainer = document.querySelector('forecastContainer');
const city = document.createElement('h3');
cityName.textContent = data.name;

const temperature = document.createElement('p');
temperature.textContent = `temperature: ${data.main.temp}`;

const humidity =document.createElement('p');
humidity.textContent = `humidity: ${data.main.humidity}%`;

const windSpeed = document.createElement('p');
windSpeed.textContent = `windSpeed: ${data.wind.speed}m/s`;

forecastContainer.appendChild(city);
forecastContainer.appendChild(temperature);
forecastContainer.appendChild(humidity);
forecastContainer.appendChild(windSpeed);


}


const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', function(event) {
    event.preventDefault();
    getApi(city, APIkey);
    getforecast(city, APIkey);
});


// forecast days 
const today = dayjs();
const forecastDays = [
    today.format(`yyyy-mm-dd`),
    today.add(1, 'day').format(`yyyy-mm-dd`),
    today.add(2, 'day').format(`yyyy-mm-dd`),
     today.add(3, 'day').format(`yyyy-mm-dd`),
     today.add(4, 'day').format(`yyyy-mm-dd`),
]
console.log(forecastDays);