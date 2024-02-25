import { format, formatDate } from "date-fns";

export function displayInfo(
    temp, 
    feelsTemp, 
    weatherCondition,
    humidity, 
    precip, 
    country, 
    city, 
    localTime,
    willItRain
    ) {
        const mainInfo = document.querySelector(".weather-info");
        mainInfo.innerHTML = "";

        //Displays weather condition
        const condition = document.createElement("h2");
        condition.classList.add("condition");
        condition.append(`${weatherCondition}`);
        mainInfo.append(condition);

        //Displays place (City, country format)
        const place = document.createElement("h2");
        place.classList.add("place");
        place.append(`${city}, ${country}`);
        mainInfo.append(place);

        //Displays temperature and other info
        const temperature = document.createElement("h1");
        temperature.classList.add("temperature");
        temperature.append(`${temp}°C`);
        mainInfo.append(temperature);

        //Displays date and time
        const dateAndTime = document.createElement("h3");
        const formatDate = format(new Date(localTime), "MMMM dd, yyyy");
        const formatTime = format(new Date(localTime), "H:mm");
        dateAndTime.append(`${formatDate} | ${formatTime}`);
        mainInfo.append(dateAndTime);
}

export function displayHourly(
    hourlyTemp,
    weatherIcon
) {
    const hourlyForecast = document.querySelector(".hourly-forecast");
    const hourlyContainer = document.createElement("div");

    //Displays weather icon
    const icon = document.createElement("img");
    icon.src = weatherIcon;
    hourlyContainer.append(icon);

    //Displays hourly temp
    const hourlyTemperature = document.createElement("p");
    hourlyTemperature.append(`${hourlyTemp}°C`);
    hourlyContainer.append(hourlyTemperature);  
    
    hourlyForecast.append(hourlyContainer);
}