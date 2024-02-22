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
        const mainInfo = document.querySelector(".main-weather-info");
        mainInfo.textContent = "";
        mainInfo.append(`Temperature: ${temp}`);
        console.log(`${feelsTemp} from displayInfo`);
        console.log(`${weatherCondition} from displayInfo`);
        console.log(`${humidity} from displayInfo`);
        console.log(`${precip} from displayInfo`);
        console.log(`${wind} from displayInfo`);
        console.log(`${windDirection} from displayInfo`);
        console.log(`${country} from displayInfo`);
        console.log(`${city} from displayInfo`);
        console.log(`${localTime} from displayInfo`);
        console.log(`${willItRain} from displayInfo`)
}