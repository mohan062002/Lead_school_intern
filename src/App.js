import React, { useState } from 'react';
import ZipCodeForm from './Components/ZipCodeForm';
import LocationInfo from './Components/LocationInfo';
import loadingspinner from './Components/loadingspinner.gif';
import './App.css';

const App = () => {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchLocationInfo = async (countryCode, postalCode) => {
    setLoading(true);
    const countryCodeUpper = countryCode.toUpperCase();
    try {
      const response = await fetch(`https://api.zippopotam.us/${countryCodeUpper}/${postalCode}`);
      if (!response.ok) {
        throw new Error('Invalid postal code or country code');
      }
      const data = await response.json();
      setLocationData(data);
      setError('');
    } catch (err) {
      setError('Error fetching data. Please check your inputs and try again.');
    } finally {
      setLoading(false);
    }
  };

  const clearLocationInfo = () => {
    setLocationData(null);
  };

  return (
    <div className="app-container">
      <h1 className='text-center font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700 font-serif  underline underline-offset-2 my-5 uppercase'>Zip Code Information App</h1>
      <ZipCodeForm onFormSubmit={fetchLocationInfo} />
      {loading && <div className='flex justify-center items-center'>
        <img src={loadingspinner} alt="spinner" className='w-[100px]' />
      </div>}
      {error && <p className="text-center text-xl font-medium text-red-500">{error}</p>}
      {locationData && <LocationInfo data={locationData} onClear={clearLocationInfo} />}
    </div>
  );
};

export default App;
