const API_KEY = "0d049599b437265a44b5b7ea6fa87c5d";

function success(position) {
    console.log("success");
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
    const city = 'Seoul'
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then(response => response.json()
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const name = data.name;
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }));
}

function error() {
    alert("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(success, error);