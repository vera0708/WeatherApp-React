
// заменил api на свой 
// также убрал key в запросах 
// теперь key проставляется на сервере, а значит можно безопасно делать запросы с фронтенда, не боясь засветить ключ
// поэтому теперь вам больше не нужна переменная API_KEY
export const API_KEY = import.meta.env.VITE_API_KEY;

export const API_URL = 'https://weather-app-proxy.m-ectuser.workers.dev/v1/current.json';
export const API_FORECAST = 'https://weather-app-proxy.m-ectuser.workers.dev/v1/forecast.json';

// redundant:
export const NEW_API = 'http://api.openweathermap.org/data/2.5/weather';
