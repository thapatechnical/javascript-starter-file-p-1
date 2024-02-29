// to get the actual country name

// to get the date and time

// search functionality

//define the getWeather function here
const getWeatherData = async () => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=addyourownapikey`;
};

document.body.addEventListener("load", getWeatherData());
