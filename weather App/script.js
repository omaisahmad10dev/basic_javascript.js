// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3a8d322a1e9db394c9be427799c8006e;

const apiKey="3a8d322a1e9db394c9be427799c8006e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=pakistan"; 

async function checkWeather() {
    const response=await fetch(apiUrl + `&appid=${apiKey}`);

    const data= await response.json();
    console.log(data);
}

checkWeather();