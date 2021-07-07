import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './form';
import Weather from './weather';


function App() {
  const [weather, setWeather] = useState({err: false});
  const [city, setCity] = useState('')
  
  return (
    <div className="App">
      <Form setCity={setCity} setWeather={setWeather} city={city} weather={weather}/>
      {weather.err ? <img src='https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif' className='error' alt='error img'/> : Object.keys(weather).length !== 1 ? <Weather weather={weather}/> : <img className='summer' src='https://i.pinimg.com/originals/53/32/38/533238dd9a8ebfeaf7a8f4d4c2cabab6.gif' alt=''/>}
    </div>
  );
}

export default App;
// 