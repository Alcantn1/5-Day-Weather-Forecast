// openweathermap Api key
const APIkey = "8e429daa5b2c1b82a6e187f2f61c7f05"

// retrieves current weather data from the Api for city searched
function getApi(city) {
    const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
    fetch(queryURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayWeather(data);
            console.log(data);
        });
}
// retrieves forecast data from api for city searched
function getForecast(city) {
    const queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey;
    fetch(queryURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayForecast(data);
            console.log(data);
        });
}
// displays current weather
function displayWeather(data) {
const forecastContainer = document.querySelector('.forecastContainer');
forecastContainer.innerHTML = "";

// creates and displays windspeed, temperature(in kelvin) and humidity
const cityName = document.createElement('h3');
cityName.textContent = data.name;

const temperature = document.createElement('p');
temperature.textContent = `Temperature: ${data.main.temp}`;

const humidity =document.createElement('p');
humidity.textContent = `humidity: ${data.main.humidity}%`;

const windSpeed = document.createElement('p');
windSpeed.textContent = `windSpeed: ${data.wind.speed}m/s`;

// appends elements to forecastContainer
forecastContainer.appendChild(cityName);
forecastContainer.appendChild(temperature);
forecastContainer.appendChild(humidity);
forecastContainer.appendChild(windSpeed);
}
// displays forecast in forecastContainer
function displayForecast(data) {
    const forecastContainer = document.querySelector('.forecastContainer');
    forecastContainer.innerHTML = ""; 

// goes through forecast for the next 5 days
    for (let i = 0; i < 5; i++) {
        const forecastDay = document.createElement('div');
        forecastDay.classList.add('forecastDay');

        const date = document.createElement('p');
        date.textContent = dayjs(data.list[i].dt_txt).format('YYYY-MM-DD');

        const temperature = document.createElement('p');
        temperature.textContent = `Temperature: ${data.list[i].main.temp}`;

        const humidity = document.createElement('p');
        humidity.textContent = `Humidity: ${data.list[i].main.humidity}%`;

        const windSpeed = document.createElement('p');
        windSpeed.textContent = `Wind Speed: ${data.list[i].wind.speed}m/s`;

        forecastDay.appendChild(date);
        forecastDay.appendChild(temperature);
        forecastDay.appendChild(humidity);
        forecastDay.appendChild(windSpeed);

        forecastContainer.appendChild(forecastDay);
    }
}


const searchBtn = document.getElementById('searchBtn');
const searchInput = document.querySelector('.form-control');

// event listener for search button
searchBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const city = searchInput.value;
    getApi(city);
    getForecast(city);
});


// displays forecast dates
const today = dayjs();
const forecastDays = [
    today.format('YYYY-MM-DD'),
    today.add(1, 'day').format('YYYY-MM-DD'),
    today.add(2, 'day').format('YYYY-MM-DD'),
    today.add(3, 'day').format('YYYY-MM-DD'),
    today.add(4, 'day').format('YYYY-MM-DD'),
];
console.log(forecastDays);
