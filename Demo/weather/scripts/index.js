"use strict";

const cityDropdown = document.getElementById("cityDropdown");
const forecastTable = document.getElementById("forecastTable");

// API url
const weatherAPI = "https://api.weather.gov/points/";

window.onload = () => {
    console.log("Page has loaded");
    populateCityDropdown();
    cityDropdown.onchange = onCitySelection;
};

function onCitySelection() {
    forecastTable.innerHTML = "";
    const selectedCity = cities.find(city => city.name === cityDropdown.value);
    if (selectedCity) {
        fetchWeather(selectedCity);
    }
}

function populateCityDropdown() {
    cityDropdown.innerHTML = "<option value=''>Select a city</option>";
    cities.forEach(city => {
        const option = new Option(city.name, city.name);
        cityDropdown.appendChild(option);
    });
}

function fetchWeather(city) {
    const coordinates = `${city.latitude},${city.longitude}`;
    const apiUrl = weatherAPI + coordinates;

    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const forecastUrl = data.properties.forecast;
            fetchForecast(forecastUrl);
        })
}

function fetchForecast(forecastUrl) {
    fetch(forecastUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            displayForecast(data.properties.periods);
        })
}

function displayForecast(periods) {
    periods.forEach(period => {
        const forecastRow = createForecastRow(period);
        forecastTable.appendChild(forecastRow);
    });
}

function createForecastRow(periodData) {
    // Create a table row
    const row = document.createElement("tr");

    // if the short forecast includes "Thunderstorms"
    if (periodData.shortForecast.indexOf("Thunderstorms") !== -1) {
        // Add the class "table-danger" to the row
        row.className += " table-danger";
    }

    // create a table cell for each data that returns
    const forecastCell = createTableCell(periodData.name);
    const temperatureCell = createTableCell(`${periodData.temperature}${periodData.temperatureUnit}`);
    const windCell = createTableCell(`Winds: ${periodData.windSpeed} ${periodData.windDirection}`);
    const shortForecastCell = createTableCell(periodData.shortForecast);

    // create image cell for each of the image icon
    const imageCell = document.createElement("td");
    const weatherIcon = document.createElement("img");
    weatherIcon.src = periodData.icon;
    imageCell.appendChild(weatherIcon);

    // add each cell to the row
    row.appendChild(forecastCell);
    row.appendChild(temperatureCell);
    row.appendChild(windCell);
    row.appendChild(shortForecastCell);
    row.appendChild(imageCell);

    return row;
}

// creating table cell
function createTableCell(content) {
    const cell = document.createElement("td");
    cell.innerHTML = content;
    return cell;
}
