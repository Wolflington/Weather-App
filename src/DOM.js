import { format, formatDate } from "date-fns";

export function displayInfo(
    temp, 
    feelsTemp, 
    weatherCondition,
    humidity, 
    precip, 
    wind, 
    windDirection, 
    country, 
    city, 
    localTime,
    willItRain) {
        const mainInfo = document.querySelector(".weather-info");
        mainInfo.textContent = "";
        //Displays weather condition
        const condition = document.createElement("h2");
        condition.append(`${weatherCondition}`);
        mainInfo.append(condition);
        //Displays place (City, country format)
        const place = document.createElement("h2");
        place.append(`${city}, ${country}`);
        mainInfo.append(place);
        //Displays temperature and other info
        const temperature = document.createElement("h1");
        temperature.classList.add("temperature");
        temperature.append(`${temp}°C`);
        mainInfo.append(temperature);
        //Displays date and time
        const date = document.createElement("h3");
        const time = document.createElement("h3");
        time.classList.add("time");
        const dateAndTime = document.createElement("div");
        const formatDate = format(new Date(localTime), "MMMM dd, yyyy");
        const formatTime = format(new Date(localTime), "H:mm");
        date.append(formatDate);
        time.append(formatTime);
        dateAndTime.append(date);
        dateAndTime.append(time);
        mainInfo.append(dateAndTime);
}