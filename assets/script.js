const searchBtn= document.querySelector('.searchBtn');
const forecastContainer = document.querySelector('.forecast-container');
const APIkey = "8e429daa5b2c1b82a6e187f2f61c7f05"
const searchHistory = [];

// Event listener for search button
searchBtn.addEventListener('click', function(){
const city = "sacramento";
const queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;

fetch(queryURL)
.then(Response => Response.json())
.then(data => {
    console.log('data');
})
    .catch(error => console.error(error));
});

// forecast days
const today = dayjs();
const forecastDays = [today, today.add(1, 'day'), today.add(2, 'day'), today.add(3, 'day'), today.add(4, 'day')];
console.log(forecastDays);





// curl "https://api.openweathermap.org/data/2.5/weather?q=Sacramento&appid=8e429daa5b2c1b82a6e187f2f61c7f05"


// const city = "sacramento";
// const queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
// fetch(queryURL);