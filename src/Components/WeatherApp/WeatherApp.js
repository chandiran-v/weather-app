import React from 'react'
import './WeatherApp.css'
import search from '../Assests/search.png'
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
  return (
    <div className='container'>
        <div className='top-bar'>
          <input type='text'  className='cityInput' placeholder='Search'></input>
          <div className='searchIcon'>
            <img src={search} style={{height:'30px'}}></img>
          </div>
        </div>

        <div className='weatherImage'>
          <img src={cloud}></img>
        </div>

        <div className='weatherTemp'>24</div>
        <div className='weatherLocation'>India</div>

        <div className='weatherData'>
          <div className='element'>
            <img src={humidity} style={elementSize}></img>
            <div className='data'>
              <div className='humidity'>60</div>
              <div className='text'>Humidity</div>
            </div>
          </div>

          <div className='element'>
            <img src={wind} style={elementSize}></img>
            <div className='data'>
              <div className='humidity'>18 Km/hr</div>
              <div className='text'>Wind Speed</div>
            </div>
          </div>
        </div>
    </div>
  )
}
