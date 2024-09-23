import axios from 'axios';

// Your API key from WeatherAPI
const apiKey = '6ebef7f077454e37860103355241309';

// Function to fetch current weather data for a city
export const fetchCurrentWeather = async (city) => {
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    );
    return response.data;  // Return the weather data
  } catch (error) {
    console.error("Error fetching the weather data: ", error);
    throw error;
  }
};

// Function to fetch the 5-day forecast for a city
export const fetchForecast = async (city) => {
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`
    );
    return response.data;  // Return the forecast data
  } catch (error) {
    console.error("Error fetching the forecast data: ", error);
    throw error;
  }
};
