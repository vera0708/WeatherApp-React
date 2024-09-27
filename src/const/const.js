export const API_KEY = import.meta.env.VITE_API_KEY;

export const API_URL = 'http://api.weatherapi.com/v1/current.json';
export const API_FORECAST = 'http://api.weatherapi.com/v1/forecast.json';
export const NEW_API = 'http://api.openweathermap.org/data/2.5/weather';

// Доступные методы:
// Base URL: api.openweathermap.org/data/2.5/forecast?&appid={API key}
// current  'http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=city'
// forecast 'http://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=city&days=7'
// new link 'https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}'
// api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=
