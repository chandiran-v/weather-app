import React from 'react'
import './WeatherApp.css'
import searchIcon from '../Assests/search.png'
import cloud from '../Assests/cloud.png'
import drizzle from '../Assests/drizzle.png'
import humidity from '../Assests/humidity.png'
import rain from '../Assests/rain.png'
import snow from '../Assests/snow.png'
import sunny from '../Assests/sunny.png'
import wind from '../Assests/wind.png'

const elementSize = {
  height: '40px',
}

export const WeatherApp = () => {

  const apiKey = '4777ca0c9cd25f363347fdec07d8bf83';
  const  search = async () =>{
    const city = document.getElementsByClassName("cityInput");
    if (city[0].value==='') return 0;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city[0].value}&units=Metric&appid=${apiKey}`;
    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName('humidity');
    const wind = document.getElementsByClassName('wind');
    const temperature = document.getElementsByClassName('weatherTemp');
    const location = document.getElementsByClassName('weatherLocation');

    humidity[0].innerHTML = data.main.humidity;
    wind[0].innerHTML = data.wind.speed;
    temperature[0].innerHTML = data.main.temp;
    location[0].innerHTML = data.name;
  }
  return (
    <div className='container'>
        <div className='top-bar'>
          <input type='text'  className='cityInput' placeholder='Search'></input>
          <div className='searchIcon'  onClick={()=>search()}>
            <img src={searchIcon} style={{height:'30px'}}></img>
          </div>
        </div>

        <div className='weatherImage'>
          <img src={cloud}></img>
        </div>

        <div className='weatherTemp'>-</div>
        <div className='weatherLocation'>--</div>

        <div className='weatherData'>
          <div className='element'>
            <img src={humidity} style={elementSize}></img>
            <div className='data'>
              <div className='humidity'>-</div>
              <div className='text'>Humidity</div>
            </div>
          </div>

          <div className='element'>
            <img src={wind} style={elementSize}></img>
            <div className='data'>
              <div className='wind'>-</div>
              <div className='text'>Wind Speed</div>
            </div>
          </div>
        </div>
    </div>
  )
}
