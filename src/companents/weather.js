import React from 'react';
import './weather.css';

function Weather({weather}) {
    const time = (timestamp) => {
        const time = timestamp * 1000;
        const date = new Date(time);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours} : ${minutes}`
    }
    const month = (timestamp) => {
        const time = timestamp * 1000;
        const date = new Date(time);
        const month = date.getUTCMonth();
        switch (month) {
            case 0:
                return 'January 1';
                break;
            case 1:
                return 'Februaly 2';
                break;
            case 2:
                return 'March 3';
                break;
            case 3:
                return 'April 4';
                break;
            case 4:
                return 'May 5';
                break;
            case 5:
                return 'June 6';
                break;
            case 6:
                return 'July 7';
                break;
            case 7:
                return 'August 8';
                break; 
            case 8:
                return 'September 9';
                break;  
            case 9:
                return 'November 10';
                break;
            case 10:
                return 'October 11';
                break; 
            case 11:
                return 'December 12';
                break; 
            default:
                return 'no month'
        }
    }
  return (
    <div>
        <div className='row'>
            <p>{time(weather.dt)}, {month(weather.dt)}</p>
            <p>{weather.name}, {weather.sys.country}</p>
        </div>
        <div className='temp'>
            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt=''/>
        <p>{(weather.main.temp - 273.15).toFixed(2)}°C</p>
        </div>
        
        <div className='row-1'>
            <p>Закат:<span>{time(weather.sys.sunset)}</span></p>
            <p>Рассвет:<span>{time(weather.sys.sunrise)}</span></p>
        </div>
        <div className='row-1 row-2'>
            <p>Скорость ветра: <span>{weather.wind.speed} m/s</span></p>
            <p>Feels like <span>{(weather.main.feels_like - 273.15).toFixed(2)}°C</span></p>
        </div>
        <div className='row-1 row-3'>
            <p>Влажность: <span>{weather.main.humidity}%</span></p>
            <p>Давление: <span>{weather.main.pressure} hPa</span></p>
        </div>
    </div>
        
  );
}

export default Weather;