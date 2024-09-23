import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [city, setCity] = useState('Istanbul'); // Default city

  // This function will be passed to the SearchBar to update the city based on user input
  const handleCitySearch = (searchedCity) => {
    setCity(searchedCity);
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      
      {/* SearchBar component */}
      <SearchBar onSearch={handleCitySearch} />

      {/* Pass the searched city to the Dashboard component */}
      <Dashboard city={city} />
    </div>
  );
}

export default App;