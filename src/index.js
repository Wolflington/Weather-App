import _ from 'lodash';
import './assets/style.css';
import './assets/normalize.css';
import './DOM';

//Undefined variables for weather data that will be given a value once the weather data is fetched
let location, temp, feelsTemp, weatherCondition, humidity, precip, wind, windDirection, country, city, localTime;

async function getWeatherData(location) {
    try {
        const response = await fetch (`https://api.weatherapi.com/v1/current.json?key=fb4d08953c954f34a8031133240602&q=${location}`, {mode: "cors"}); //Gets the weather data from Weather API

        if (!response.ok) {
            throw new Error (`There is a problem getting the response.`);
        }

        const weatherData = await response.json(); //Extracts the data using json method

        //Set the data to undefined variables
        const { //Destructuring assignment allows to access the properties and assign them to their respective variables
            temp_c: temp,
            feelslike_c: feelsTemp,
            condition: {text: weatherCondition},
            humidity: humidity,
            precip_mm: precip,
            wind_kph: wind,
            wind_dir: windDirection,
        } = weatherData.current

        const { //Destructuring assignment allows to access the properties and assign them to their respective variables
            country: country,
            name: city,
            localtime: localTime,
        } = weatherData.location

        const weatherInfo = {
            temp: `Temperature: ${temp}°C`,
            feelsTemp: `Feels like: ${feelsTemp}°C`,
            weatherCondition: `Condition: ${weatherCondition}`,
            humidity: `Humidity: ${humidity}`,
            precip: `Precipitation: ${precip}mm`,
            wind: `Wind speed: ${wind}kph`,
            windDirection: `Wind direction: ${windDirection}`,
            country: `Country: ${country}`,
            city: `City: ${city}`,
            localTime: `Local time: ${localTime}`,
        };

        if (location == undefined) {
            throw new Error ("Invalid location or location does not exist");
        }
        
        console.log(location);
        console.log(weatherData);
        return { weatherInfo };
    } 
    
    catch (error) {
        console.error("Wrong or invalid location!");
        //Add event listeners that executes the function which will make a modal appear when an error is caught
    }
}

//Event listener for searching city or country
const searchForCity = document.getElementById("search-form");
searchForCity.addEventListener("submit", (event) => {
    event.preventDefault();
    const location = document.getElementById("search").value;
    getWeatherData(location);
});