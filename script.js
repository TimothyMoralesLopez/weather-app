const myKey = 'B3XSXCWGAY7L2C9NDLTBNCDT3'; 

const searchBar = document.querySelector("#search-bar");
const searchButton = document.querySelector(".search-button");

const weatherDiv = document.querySelector(".weather-div");
const areaDiv = document.querySelector(".area-div");
const tempDiv = document.querySelector(".temp-div");
const descDiv = document.querySelector(".desc-div");

let myAreaData;
let myTempData;
let myDescData

let myArea = 'london';
let myUrl; 

async function getWeatherAsync() {
  const response = await fetch(myUrl);
  const weatherData = await response.json();
  
  myAreaData = weatherData.address; 
  myTempData = weatherData.days[0].temp; 
  myDescData = weatherData.days[0].description; 

  updateDisplay(); 
}

function updateArea() {
    myArea = searchBar.value; 
    myUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${myArea}?key=${myKey}`;
}

function updateDisplay() {
  areaDiv.textContent = `Weather for: ${myAreaData}`; 
  tempDiv.textContent = `Temperature (F): ${myTempData}`;
  descDiv.textContent = `Description: ${myDescData}`;
}

searchButton.addEventListener('click', (event) => { 
  updateArea() 
  getWeatherAsync(); 
  event.preventDefault(); 
}); 

getWeatherAsync(); 
