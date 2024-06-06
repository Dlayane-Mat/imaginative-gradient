function displayTemperature(response) {
    let temperatureElement = document.querySelector("#current-temperature");
    let temperature = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#current-city");
    let currentDateELement = document.querySelector("#current-date");
    let currentDate = new Date(response.data.time * 1000);
    let humidityElement = document.querySelector("#current-humidity");
    let windspeedElement = document.querySelector("#current-windspeed");
    let iconElement = document.querySelector("#icon");
    let descriptionElement = document.querySelector("#weather-description");
    
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windspeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}">`;
    temperatureElement.innerHTML = temperature;
    currentDateELement.innerHTML = formatDate(currentDate);
  }
  
  
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    if (minutes < 10) {
        minutes = `0${minutes}`;
      }

    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
  }

  function searchCity(city){
    let apiKey = "0bd4693b39a661e4b0370fe772t7a9o3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
   axios.get(apiUrl).then(displayTemperature);
  }

  function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");


     searchCity(searchInputElement.value);
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  
  currentDateELement.innerHTML = formatDate(currentDate);

  
  searchCity("india");