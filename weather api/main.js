function fetchData() {
    fetch("http://localhost:3000/weather")
        .then((res) => res.json())
        .then((data) => DisplayData(data))
        .catch((err) => console.log(err));
}

fetchData();

function DisplayData(data) {

    const container = document.getElementById("weatherContainer");

    container.innerHTML = "";

    data.map((el) => {

        container.innerHTML += `
            <div class="card">

                <img src="${el.image}" alt="${el.city}">

                <div class="content">

                    <h2>${el.city}</h2>

                    <p><strong>🌡 Temperature:</strong> ${el.temperature}°C</p>

                    <p><strong>☁ Condition:</strong> ${el.condition}</p>

                    <p><strong>💧 Humidity:</strong> ${el.humidity}%</p>

                    <p><strong>💨 Wind:</strong> ${el.wind} km/h</p>

                </div>

            </div>
        `;
    });

}