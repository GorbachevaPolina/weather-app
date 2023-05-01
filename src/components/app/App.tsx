import React from 'react';
import './App.scss';
import Header from '../header/header';
import LocationInput from '../location-input/location-input';

function App() {
  return (
    <div className="app">
      <Header />
      <LocationInput />
    </div>
  );
}

export default App;
