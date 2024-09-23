import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim() !== '') {
      onSearch(city);
      setCity(''); // Clear the input field after searching
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        placeholder="Search city..."
        onChange={(e) => setCity(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
