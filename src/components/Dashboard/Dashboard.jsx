import React, { useState, useEffect } from 'react';
import { fetchCurrentWeather, fetchForecast } from '../../api/weatherAPI';
import './Dashboard.css';

const Dashboard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState('en'); 

  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const currentWeather = await fetchCurrentWeather(city);
        const forecast = await fetchForecast(city);
        setWeatherData(currentWeather);
        setForecastData(forecast);
      } catch (err) {
        setError('Error fetching weather data');
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [city]);

  // Function to handle language toggle
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  // Texts for English and Turkish
  const texts = {
    en: {
      currentWeather: 'Current Weather in',
      temp: 'Temperature',
      condition: 'Condition',
      forecast: '5-Day Forecast',
      wind: 'Wind Status',
      humidity: 'Humidity Level',
      uv: 'UV Index',
      noData: 'No data available',
      loading: 'Loading...',
      error: 'Error fetching weather data',
    },
    tr: {
      currentWeather: 'Mevcut Hava Durumu',
      temp: 'Sıcaklık',
      condition: 'Durum',
      forecast: '5 Günlük Tahmin',
      wind: 'Rüzgar Durumu',
      humidity: 'Nem Seviyesi',
      uv: 'UV İndeksi',
      noData: 'Veri yok',
      loading: 'Yükleniyor...',
      error: 'Hava durumu verileri alınırken hata oluştu',
    },
  };

  // Weather condition translations
  const weatherConditionTranslations = {
    en: {
      Sunny: 'Sunny',
      'Patchy rain nearby': 'Patchy rain nearby',
      'Moderate rain': 'Moderate rain',
      'Partly cloudy': 'Partly cloudy',
    },
    tr: {
      Sunny: 'Güneşli',
      'Patchy rain nearby': 'Yakında parçalı yağmur',
      'Moderate rain': 'Orta şiddetli yağmur',
      'Partly cloudy': 'Parçalı Bulutlu',
    },
  };

  // Function to get translated weather condition
  const translateCondition = (condition) => {
    return weatherConditionTranslations[language][condition] || condition;
  };

  return (
    <div className="weather-dashboard">
      {/* Button for Language Toggle */}
      <button onClick={toggleLanguage}>
        {language === 'en' ? 'Türkçe' : 'English'}
      </button>

      {loading ? (
        <p>{texts[language].loading}</p>
      ) : error ? (
        <p>{texts[language].error}</p>
      ) : weatherData && forecastData ? (
        <div>
          {/* Current Weather Section */}
          <div className="current-weather">
            <h2>{texts[language].currentWeather} {weatherData.location.name}</h2>
            <p>{texts[language].temp}: {weatherData.current.temp_c}°C</p>
            <p>{texts[language].condition}: {translateCondition(weatherData.current.condition.text)}</p>
            <img
              src={weatherData.current.condition.icon}
              alt={translateCondition(weatherData.current.condition.text)}
            />
          </div>

          {/* 5-Day Forecast Section */}
          <div className="forecast">
            <h3>{texts[language].forecast}:</h3>
            <ul>
              {forecastData.forecast.forecastday.map((day, index) => (
                <li key={index}>
                  <p>{new Date(day.date).toLocaleDateString()}</p>
                  <img src={day.day.condition.icon} alt={translateCondition(day.day.condition.text)} />
                   <p>{translateCondition(day.day.condition.text)}</p>
                  <p>{day.day.maxtemp_c}°C / {day.day.mintemp_c}°C</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Extra Weather Details Section */}
          <div className="extra-details">
            <div>
              <p>{texts[language].wind}</p>
              <p>{weatherData.current.wind_kph} km/h</p>
            </div>
            <div>
              <p>{texts[language].humidity}</p>
              <p>{weatherData.current.humidity}%</p>
            </div>
            <div>
              <p>{texts[language].uv}</p>
              <p>{weatherData.current.uv}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>{texts[language].noData}</p>
      )}
    </div>
  );
};

export default Dashboard;
