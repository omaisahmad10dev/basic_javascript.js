// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3a8d322a1e9db394c9be427799c8006e;

const apiKey = "3a8d322a1e9db394c9be427799c8006e";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector("#search input");
const searchBtn = document.querySelector("#search button");
const icon=document.querySelector('#weather-info');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  const data = await response.json();
  console.log(data);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector("#weather").style.display = "none";
  } else {
    document.querySelector("#weatherhere").innerHTML =
      Math.round(data.main.temp) + " °C";
    document.querySelector("#cityname").innerHTML =
      data.name + ", " + data.sys.country;
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";

    document.querySelector("#wind").innerHTML = data.wind.speed + "km/h";

    document.querySelector("#weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

   if (data.weather[0].main == "Clouds") {
  icon.src = "./images/clouds.png";
} else if (data.weather[0].main == "Drizzle") {
  icon.src = "./images/drizzle.png";
} else if (data.weather[0].main == "Mist") {
  icon.src = "./images/mist.png";
} else if (data.weather[0].main == "Rain") {
  icon.src = "./images/rain.png";
} else if (data.weather[0].main == "Snow") {
  icon.src = "./images/snow.png";
} else {
  // Agar "Clear" ho ya koi aur weather ho, default clear icon set hoga
  icon.src = "./images/clear.png";
}

    
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchInput.value);
});
