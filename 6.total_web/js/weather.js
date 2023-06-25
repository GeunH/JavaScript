const API_KEY = "8b019539dad3b1aa1b91feb88f45c4c7";

function onGeoOk(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoError() {
    alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);