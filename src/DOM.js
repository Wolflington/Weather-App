export function displayInfo(
    temp, 
    feelsTemp, 
    weatherCondition,
    conditionIcon, 
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

        //Create h3 element for weather condition
        const condition = document.createElement("h2");
        //Create img element for icon next to weather condition text
        const conditionImg = document.createElement("img");
        //Set value of weatherCondition to h2 element
        condition.append(`${weatherCondition}`);
        //Append icon to img element
        conditionImg.src = conditionIcon;
        //Append h3 element to mainInfo
        //Append img element to mainInfo
        mainInfo.append(condition);
        mainInfo.append(conditionImg);

        //Create h3 element for city, country
        const place = document.createElement("h3");
        //Set value of city and country to h3
        place.append(`${city}, ${country}`);
        //Append the element to mainInfo
        mainInfo.append(place);
        
        //Create h1 element for temperature
        const temperature = document.createElement("h1");
        //Add class to h1 for customization
        temperature.classList.add("temperature");
        //Set value of temp to h1 element
        temperature.append(temp);
        //Add p elements for: feels like, humidity, and chance of rain
        const feelsLikeTemp = document.createElement("p");
        const humid = document.createElement("p");
        const chanceofRain = document.createElement("p");
        //Set value of feelsLike, humidity, and willItRain to respective elements
        feelsLikeTemp.append(feelsTemp);
        humid.append(humidity);
        chanceofRain.append(willItRain);
        //Append h1 element to mainInfo
        mainInfo.append(temperature);
        mainInfo.append(feelsLikeTemp);
        mainInfo.append(humid);
        mainInfo.append(chanceofRain);

        //Create h3 element for date and time
        const dateAndTime = document.createElement("h3");
        //Set value of date and time to the element
        dateAndTime.append(localTime);
        mainInfo.append(dateAndTime);
}