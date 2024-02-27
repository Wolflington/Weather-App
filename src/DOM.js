import { format } from "date-fns";
import searchImg from './assets/search-icon.png';
import feelsLikeIcon from './assets/thermometer.png';
import rainIcon from './assets/rain.png';
import humidityIcon from './assets/humidity.png';

const searchIcon = document.getElementById("search-icon");
searchIcon.setAttribute("src", searchImg);

export function displayInfo(
    temp, 
    feelsTemp, 
    weatherCondition,
    humidity, 
    country, 
    city, 
    localTime,
    willItRain
    ) {
        const mainInfo = document.querySelector(".weather-info");
        mainInfo.innerHTML = "";

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
        temperature.append(`${temp}°C`);
        mainInfo.append(temperature);

        //Displays date and time
        const dateAndTime = document.createElement("h3");
        const formatDate = format(new Date(localTime), "MMMM dd, yyyy");
        const formatTime = format(new Date(localTime), "H:mm");
        dateAndTime.append(`${formatDate} | ${formatTime}`);
        mainInfo.append(dateAndTime);

        const additionalInfo = document.querySelector(".additional-info");
        additionalInfo.innerHTML = "";

        //Displays feels like temperature
        const feelsLikeContainer = document.createElement("div");
        feelsLikeContainer.classList.add("feels-like");
        const feelsLikeDetails = document.createElement("div");
        const feelsLikeText = document.createElement("p");
        feelsLikeText.textContent = "Feels like";
        const feelsLikeTemp = document.createElement("h2");
        feelsLikeTemp.textContent = `${feelsTemp}°C`;
        const tempIcon = document.createElement("img");
        tempIcon.src = feelsLikeIcon;

        feelsLikeDetails.append(feelsLikeText, feelsLikeTemp);
        feelsLikeContainer.append(tempIcon, feelsLikeDetails);
        additionalInfo.append(feelsLikeContainer);

        //Displays humidity
        const humidityContainer = document.createElement("div");
        const humidityDetails = document.createElement("div");
        const humidityText = document.createElement("p");
        humidityText.textContent = "Humidity"
        const humidityPercent = document.createElement("h2");
        humidityPercent.textContent = `${humidity}%`;
        const humidityPic = document.createElement("img");
        humidityPic.src = humidityIcon;

        humidityDetails.append(humidityText, humidityPercent);
        humidityContainer.append(humidityPic, humidityDetails);
        additionalInfo.append(humidityContainer);

        //Displays chance of raining
        const rainContainer = document.createElement("div");
        const rainDetails = document.createElement("div");
        const rainText = document.createElement("p");
        rainText.textContent = "Chance of raining";
        const chanceOfRain = document.createElement("h2");
        chanceOfRain.textContent = `${willItRain}%`;
        const rainPic = document.createElement("img");
        rainPic.src = rainIcon;

        rainDetails.append(rainText, chanceOfRain);
        rainContainer.append(rainPic, rainDetails);
        additionalInfo.append(rainContainer);
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

export function clearHourlyData() {
    const hourlyForecast = document.querySelector(".hourly-forecast");
    hourlyForecast.innerHTML = "";
}

(function changeSlide() {
    const hourlyWrapper = document.querySelector(".hourly-forecast");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let dots = document.querySelectorAll(".dot");
    let activeDot = 0;

    //Event listeners to change slides
    prevBtn.addEventListener("click", () => {
        if (activeDot === 0) { //If activeDot is on the first slide, then loop back to the last slide
            activeDot = dots.length - 1;
        } else {
            activeDot--;
        }
        changeSlideTo(activeDot);
    })

    nextBtn.addEventListener("click", () => {
        if (activeDot === dots.length - 1) { //If activeDot is on the last slide, then loop back to the first slide
            activeDot = 0;
        } else {
            activeDot++;
        }
        changeSlideTo(activeDot);
    });

    function changeSlideTo(index) {
        //Get the parent element and its width
        let displayArea = hourlyWrapper.parentElement.clientWidth;
        //Calculate the area of pixels
        let pixels = -displayArea * index;
        //Apply style to wrapper to transform the wrapper
        hourlyWrapper.style.transform = 'translateX('+ pixels + 'px)';
        //Toggles active class
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
        activeDot = index;
    }

    for (let index = 0; index < dots.length; index++) {
            let dot = dots[index];
            dot.setAttribute("data-index", index);
            dot.addEventListener("click", (event) => {
            //Get the index of the dot
            let clickedDot = event.currentTarget.dataset.index;
            if (clickedDot === activeDot) {
                return;
            }
            else {
                changeSlideTo(clickedDot);
            }
        });
    }
})();