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
    weatherIcon,
    hour
) {
    const hourlyForecast = document.querySelector(".hourly-forecast");
    const hourlyContainer = document.createElement("div");
    hourlyContainer.classList.add("hourly-container");

    //Displays time (hour)
    const hourTime = document.createElement("p");
    const formatHour = format(new Date(hour), "HH");
    hourTime.append(formatHour);
    hourlyContainer.append(hourTime);

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

//Initialize a variable that gets the element of wrapper
const hourlyWrapper = document.querySelector(".hourly-forecast");
//Access the dots
let dots = document.querySelectorAll(".dot");
//Set a variable to zero to initialize array index (which is 0)
let activeDot = 0;

//FOR EACH dots, pass two parameters: dot and index
dots.forEach((dot, index) => {
    //SET ATTRIBUTE to each dot and pass index parameter to the dots
    dot.setAttribute("data-index", index);
    //Add click event listener to dot, and pass "event" parameter
    dot.addEventListener("click", (event) => {
        //Create variable clickedDot that pass the event parameter to targeted dataset attribute
        let clickedDot = event.currentTarget.dataset.index;
        //IF the clicked dot is the same as active dot, do nothing
        if (clickedDot === activeDot) {
            return;
        }
        //ELSE change the clickedDot to activeDot
        else {
            //Initialize variable additionalInfo to get the element of wrapper and its width
            let displayArea = hourlyWrapper.parentElement.clientWidth;
            //Initialize variable pixels to calculate the area of pixels
            let pixels = -displayArea * clickedDot;
            //Apply style to wrapper to transform the wrapper
            hourlyWrapper.style.transform = 'translateX('+ pixels + 'px)';
            //Set the active dot to clicked dot variable
            dots[activeDot].classList.remove("active");
            dots[clickedDot].classList.add("active");
            activeDot = clickedDot;
        }
    });
});
