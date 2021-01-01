function showTemperature(response) {

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
}

let apiKey = "26dddc2844f26171cf43bb8923cb9f4b";
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Dubai&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(showTemperature);