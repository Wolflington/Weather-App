import _ from 'lodash';
import './assets/style.css';
import './assets/normalize.css';
import './DOM';

//Undefined variables for weather data that will be given a value once the weather data is fetched
let location, temp, feelsTemp, weatherCondition, humidity, precip, wind, windDirection, country, city, localTime;

export default async function getWeatherData(location) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=fb4d08953c954f34a8031133240602&q=${location}`, {mode: "cors"}); //Gets the weather data from Weather API

        if (!response.ok) {
            throw new Error (`Failed to fetch data.`);
        }

        const weatherData = await response.json(); //Extracts the data using json method
        const extractedData = extractData(weatherData)

        // //Set the data to undefined variables
        // const { //Destructuring assignment allows to access the properties and assign them to their respective variables
        //     temp_c: temp,
        //     feelslike_c: feelsTemp,
        //     condition: {text: weatherCondition},
        //     humidity: humidity,
        //     precip_mm: precip,
        //     wind_kph: wind,
        //     wind_dir: windDirection,
        // } = weatherData.current

        // const { //Destructuring assignment allows to access the properties and assign them to their respective variables
        //     country: country,
        //     name: city,
        //     localtime: localTime,
        // } = weatherData.location

        if (location == undefined) {
            throw new Error ("Invalid location or location does not exist");
        }
        
        console.log(location);
        console.log(weatherData);
    } 
    
    catch (error) {
        console.error("Wrong or invalid location!", error);
        //Add event listeners that executes the function which will make a modal appear when an error is caught
    }
}

function extractData(weatherData) {
    return {
        temp: weatherData.current.temp_c,
        feelsTemp: weatherData.current.feelslike_c,
        weatherCondition: weatherData.current.condition.text,
        humidity: weatherData.current.humidity,
        precip: weatherData.current.precip_mm,
        wind: weatherData.current.wind_kph,
        windDirection: weatherData.current.wind_dir,
        country: weatherData.location.country,
        city: weatherData.location.name,
        localTime: weatherData.location.localtime
    }
}

//Event listener for searching city or country
const searchForCity = document.getElementById("search-form");
searchForCity.addEventListener("submit", (event) => {
    event.preventDefault();
    const location = document.getElementById("search").value;
    getWeatherData(location);
});