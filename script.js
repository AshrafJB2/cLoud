
const apiKey = "945c924894191005d9fdb23bf52d6804";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const respons = await fetch(apiUrl + `&q=${city}` + "&appid=" + apiKey);
    var data = await respons.json();
    if (data.cod != 404) {
        
    
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".humidity-percentage").textContent = data.main.humidity + "%";
    document.querySelector(".wind-speed").textContent = data.wind.speed + "km/h";
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".description").textContent = data.weather[0].description;

    const weatherIcon = document.querySelector(".weather-icon");
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            
}
else {
    alert(data.message);
}
}
checkWeather("casablanca");

searchBtn.addEventListener('click', () => {
    if (searchBox.value.length > 0) {
        checkWeather(searchBox.value);
        searchBox.value = "";
    }
})

searchBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
        searchBox.value = "";
    }
});