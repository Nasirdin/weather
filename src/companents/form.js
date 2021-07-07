import React from 'react';
import './form.css';
import axios from 'axios'  
import Weather from './weather';

const Form = ({setCity, city, setWeather, weather}) => {
    const key = '5fcce4817e48ac735601d57ec1786a08';
    const inputHandler = (e) => {
        setCity(e.target.value);

    }
    const formHandler = (e) => {
        e.preventDefault();
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
          .then(({data}) => setWeather({...weather, ...data, err: false}))
          .catch(() => {
              setWeather({...weather, err: true})
          })
    }
  return (
    <form onSubmit={formHandler}>
        <input className='search' type='text' placeholder='Search city' onChange={inputHandler}/>
        <button className='button' type='submit'><img src='https://img.icons8.com/ios/452/search--v5.png'/></button>
    </form>
  );
}

export default Form;