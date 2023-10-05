const apiKey = "6dcac7143d9730142452aea75d6d0e1e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const unitsSelect = document.getElementById("units");
const tempElement = document.querySelector(".temp");

function checkWeather(city) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", apiUrl + city + `&appid=${apiKey}`, true);
 

  xhr.onload = function () {
    if (xhr.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      var data = JSON.parse(xhr.responseText);
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
      }
      console.log(data)

      document.querySelector(".weather").style.display = "block";
    }
  };

  xhr.send();
}

searchBtn.addEventListener("click", function () {
  checkWeather(searchBox.value);
});
unitsSelect.addEventListener("change", () => {
    const unit = unitsSelect.value || "metric";
    const temp = data.main.temp;

    if (unit === "metric") {
        tempElement.innerHTML = `${temp}°C`;
      } else {
        tempElement.innerHTML = `${(temp * 9 / 5 + 32).toFixed(2)}°F`;
      }
    });