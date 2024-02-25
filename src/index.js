import _ from 'lodash';
import './assets/normalize.css';
import './assets/style.css';
import { displayInfo, displayHourly } from './DOM';

//Undefined variables for weather data that will be given a value once the weather data is fetched
let location, temp, feelsTemp, weatherCondition, humidity, precip, country, city, localTime, willItRain, weatherIcon, hourlyTemp;

export default async function getWeatherData(location) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fb4d08953c954f34a8031133240602&q=${location}`, {mode: "cors"}); //Gets the weather data from Weather API
        if (!response.ok) {
            throw new Error (`Failed to fetch data.`);
        }
        const weatherData = await response.json(); //Extracts the data using json method
        
        //Set the data to undefined variables
        //Destructuring assignment allows to access the properties and assign them to their respective variables
        const { //Get the main info
            temp_c: temp,
            feelslike_c: feelsTemp,
            condition: {text: weatherCondition},
            humidity: humidity,
            precip_mm: precip,
        } = weatherData.current

        const { //Access the location
            country: country,
            name: city,
            localtime: localTime,
        } = weatherData.location

        const { //Access the chance of raining for the day
            daily_chance_of_rain: willItRain
        } = weatherData.forecast.forecastday[0].day

        // Loop through the array to access every indeces
        let i = 0;
        const hourlyData = weatherData.forecast.forecastday[0].hour;
        for (i = 0; i < hourlyData.length; i++) {
            const { //Access the icon and temp every hour
                temp_c: hourlyTemp,
                condition: {icon: weatherIcon},
            } = hourlyData[i]
            displayHourly(hourlyTemp, weatherIcon);
        }

        displayInfo(temp, feelsTemp, weatherCondition, humidity, precip, country, city, localTime);
        if (location == undefined) {
            throw new Error ("Invalid location or location does not exist");
        }
        console.log(location);
        console.log(weatherData);
        return weatherData;
    } 
    catch (error) {
        console.error("Wrong or invalid location!", error);
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