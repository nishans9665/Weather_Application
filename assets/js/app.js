console.log("js loader");

// --- Search by city ---
document.getElementById("cityInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        let city = this.value.trim();

        if (city === "") {
            alert("Please enter a city name");
            return;
        }

        fetch(`https://api.weatherapi.com/v1/current.json?key=0cefa4b38aae4e3595a95844251611&q=${city}`)
            .then(res => res.json())
            .then(data => updateUI(data))
            .catch(() => alert("City not found"));
    }
});

// --- Auto location ---
navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    fetch(`https://api.weatherapi.com/v1/current.json?key=0cefa4b38aae4e3595a95844251611&q=${lat},${lon}`)
        .then(res => res.json())
        .then(data => updateUI(data))
        .catch(() => alert("Unable to load weather for your location"));
}

function error() {
    alert("Unable to retrieve your location");
}

// --- UI updater ---
function updateUI(data) {
    document.getElementById("city_name").textContent = data.location.name;
    document.getElementById("country").textContent = data.location.country;
    document.getElementById("temp").textContent = data.current.temp_c;
    document.getElementById("ontime").textContent = "Date And Time : " + data.location.localtime;

    document.getElementById("condition-live").textContent = data.current.condition.text;
    document.getElementById("condition").src = "https:" + data.current.condition.icon;

    document.getElementById("windSpeed").textContent = data.current.wind_kph;
    document.getElementById("cloudcover").textContent = data.current.cloud;
    document.getElementById("pressure").textContent = data.current.pressure_mb;
    document.getElementById("humidity").textContent = data.current.humidity;
    document.getElementById("uvindex").textContent = data.current.uv;
    document.getElementById("visibility").textContent = data.current.vis_km;
}
