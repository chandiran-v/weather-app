import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import '/public/index.html'
import {WeatherApp} from './Components/WeatherApp/WeatherApp.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='App'>
    <WeatherApp />
  </div>
);
