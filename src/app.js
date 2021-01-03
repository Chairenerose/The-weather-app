

function formatDate(timestamp) {
    let now = new Date(timestamp);
    let currentHour = now.getHours();
    if (currentHour < 10) {
        currentHour = `0${currentHour}`;
    }
    let currentMinutes = now.getMinutes();
    if (currentMinutes < 10) {
        currentMinutes = `0${currentMinutes}`;
    }

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];


    return `${day} ${currentHour}: ${currentMinutes}`;

}



function formatHours(timestamp) {
    let now = new Date(timestamp);
    let currentHour = now.getHours();
    if (currentHour < 10) {
        currentHour = `0${currentHour}`;
    }
    let currentMinutes = now.getMinutes();
    if (currentMinutes < 10) {
        currentMinutes = `0${currentMinutes}`;
    }
    return `${currentHour}:${currentMinutes}`;
}


function showTemperature(response) {
    console.log(response.data);
    let temperature = document.querySelector("#degrees");
    let temperatureResponse = Math.round(response.data.main.temp);
    temperature.innerHTML = `${temperatureResponse}`;
    let city = document.querySelector(".my-city");
    city.innerHTML = response.data.name;
    let description = document.querySelector("#weatherDescription");
    description.innerHTML = response.data.weather[0].description;
    let humidity = document.querySelector("#humidityInfo");
    let humidityResult = response.data.main.humidity;
    humidity.innerHTML = `${humidityResult}%`;
    let wind = document.querySelector("#windInfo");
    let windResult = response.data.wind.speed;
    wind.innerHTML = `${windResult} km/h`;
    let date = document.querySelector("#time");
    date.innerHTML = formatDate(response.data.dt * 1000);
    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );


    celsiusTemperature = response.data.main.temp


}

function showForecast(response) {
    let myForecast = document.querySelector("#forecast");
    let forecast = response.data.list[0];

    myForecast.innerHTML = `
      <div class="col-2">
                    <h3>${formatHours(forecast.dt * 1000)}</h3>
                    <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="">

                    <div class="weather-forcast-temperature">
                    
                        <strong>${Math.round(forecast.main.temp_max)}°</strong>  ${Math.round(forecast.main.temp_min)}°

                    </div> 
        </div> 
    `;

    forecast = response.data.list[1];

    myForecast.innerHTML = myForecast.innerHTML +=
        `
      <div class="col-2">
                    <h3>${formatHours(forecast.dt * 1000)}</h3>
                    <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="">
                    <div class="weather-forcast-temperature">
                        <strong>${Math.round(forecast.main.temp_max)}°</strong>  ${Math.round(forecast.main.temp_min)}°

                    </div>
        </div>
    `;

    forecast = response.data.list[2];

    myForecast.innerHTML = myForecast.innerHTML +=
        `
      <div class="col-2">
                    <h3>${formatHours(forecast.dt * 1000)}</h3>
                    <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="">
                    <div class="weather-forcast-temperature">
                        <strong>${Math.round(forecast.main.temp_max)}°</strong>  ${Math.round(forecast.main.temp_min)}°

                    </div>
        </div>
    `;

    forecast = response.data.list[3];

    myForecast.innerHTML = myForecast.innerHTML +=
        `
      <div class="col-2">
                    <h3>${formatHours(forecast.dt * 1000)}</h3>
                    <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="">
                    <div class="weather-forcast-temperature">
                        <strong>${Math.round(forecast.main.temp_max)}°</strong>  ${Math.round(forecast.main.temp_min)}°

                    </div>
        </div>
    `;

    forecast = response.data.list[4];

    myForecast.innerHTML = myForecast.innerHTML +=
        `
      <div class="col-2">
                    <h3>${formatHours(forecast.dt * 1000)}</h3>
                    <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="">
                    <div class="weather-forcast-temperature">
                        <strong>${Math.round(forecast.main.temp_max)}°</strong>  ${Math.round(forecast.main.temp_min)}°

                    </div>
        </div>
    `;

    forecast = response.data.list[5];

    myForecast.innerHTML = myForecast.innerHTML +=
        `
      <div class="col-2">
                    <h3>${formatHours(forecast.dt * 1000)}</h3>
                    <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="">
                    <div class="weather-forcast-temperature">
                        <strong>${Math.round(forecast.main.temp_max)}°</strong>  ${Math.round(forecast.main.temp_min)}°

                    </div>
        </div>
    `;

}


function search(cityName) {
    let apiKey = "26dddc2844f26171cf43bb8923cb9f4b";
    let metric = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${metric}`;
    axios.get(apiUrl).then(showTemperature);

    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${metric}`;
    axios.get(apiUrl).then(showForecast);

}

function findCity(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-input");
    search(cityInput.value);
}

function showFahrenheitTemperature(event) {
    event.preventDefault();
    let changeToFahrenheit = document.querySelector("#degrees");
    let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
    changeToFahrenheit.innerHTML = Math.round(fahrenheitTemperature);
}

function showCelsiusTemperature(event) {
    event.preventDefault();
    let changeToCelsius = document.querySelector("#degrees");
    changeToCelsius.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let form = document.querySelector("#city-form");
form.addEventListener("submit", findCity);

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", showFahrenheitTemperature);

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", showCelsiusTemperature);

search("Accra");