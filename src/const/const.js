export const API_KEY = import.meta.env.VITE_API_KEY;
export const BASE_URL = 'http://api.weatherapi.com/v1'
export const API_URL = 'http://api.weatherapi.com/v1/current.json';
export const API_FORECAST = 'http://api.weatherapi.com/v1/forecast.json';

// Доступные методы:
// Base URL: http://api.weatherapi.com/v1
// current  'http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=city'
// forecast 'http://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=city&days=7'