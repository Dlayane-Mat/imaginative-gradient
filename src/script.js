function displayTemperature(response) {
    let temperatureElement = document.querySelector("#current-temperature");
    let temperature = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#current-city");
    let currentDateELement = document.querySelector("#current-date");
    let currentDate = new Date(response.data.time * 1000);
    
    cityElement.innerHTML = response.data.city;
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

  function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    searchCity(searchInputElement.value);
  
  }
  function searchCity(city){
    let apiKey = "0bd4693b39a661e4b0370fe772t7a9o3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
   axios.get(apiUrl).then(displayTemperature);
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  
  currentDateELement.innerHTML = formatDate(currentDate);

  
  search("Limpopo");