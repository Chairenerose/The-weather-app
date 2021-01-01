let now = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
let currentHour = now.getHours();
let currentMinutes = now.getMinutes();


let date = document.querySelector("#date");
date.innerHTML = `${day}`;

let time = document.querySelector("#time");
time.innerHTML = `${currentHour}:${currentMinutes}`;




function showTemperature(response) {
    console.log(response.data);
    let temperature = document.querySelector("#degrees");
    let temperatureResponse = Math.round(response.data.main.temp);
    temperature.innerHTML = `${temperatureResponse}°C`;
    let city = document.querySelector("h1");
    city.innerHTML = response.data.name;
    let description = document.querySelector("#weatherDescription");
    description.innerHTML = response.data.weather[0].description;
    let humidity = document.querySelector("#humidityInfo");
    let humidityResult = response.data.main.humidity;
    humidity.innerHTML = `${humidityResult}%`;
    let wind = document.querySelector("#windInfo");
    let windResult = response.data.wind.speed;
    wind.innerHTML = `${windResult} km/h`;
    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    console.log(response.data);

}


let apiKey = "26dddc2844f26171cf43bb8923cb9f4b";
let cityName = "Dubai";
let metric = "metric";
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${metric}`;


axios.get(apiUrl).then(showTemperature);