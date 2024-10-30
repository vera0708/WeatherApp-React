import { useDispatch, useSelector } from 'react-redux';
import { ButtonClose } from '../../components/ButtonClose/ButtonClose';
import { reformateDate } from '../../helpers';
import { Container } from '../../parts/Container/Container';
import s from './WholeDay.module.css';
import { useEffect } from 'react';
import { Loading } from '../../components/Loading/Loading';
import { useParams } from 'react-router-dom';
import { fetchWeather } from '../../store/weather/weather.slice';
import { FavoriteButton } from '../../components/FavoriteButton/FavoriteButton';

export const WholeDay = () => {    
    const dispatch = useDispatch();
    const { city } = useParams();
    const { dayIndex } = useParams();
    const { data, loading, error } = useSelector(state => state.weather);

    useEffect(() => {
        dispatch(fetchWeather(city));
    }, [dispatch, city]);

    if (loading) return <div className='flex bg-[#beaac4] justify-center items-center py-3'>loading Forecast...<Loading /></div>
    if (error) return <div className='flex bg-[#beaac4] justify-center items-center py-3'>Error Forecast: {error}</div>

    if (!data) {
        return <div className='flex bg-[#beaac4] justify-between items-center py-3'>No data WholeDay<Loading /></div>
    }

    const datalocaltime = data.forecast.forecastday[dayIndex].date;
    const month = reformateDate(datalocaltime);
    const dayN = datalocaltime.split('-')[2];

    return (
    <section className={s.wholeday}>
        <div className='flex justify-center mx-10 mb-5 items-center'>
            <ButtonClose city={city} />      
        </div>            
            <Container>                
            <div className={s.weather}>
                <FavoriteButton city={city} />  
                <h2 className={s.title}>{data.location.name}, {data.location.country}</h2>
                <h3 className={s.title}>{dayN} {month}</h3>
                <p className={s.temperature}>{data.forecast.forecastday[dayIndex].day.avgtemp_c}&#176;C</p>
                <div className={s.precipitation}>
                    <p className={s.text}>{data.forecast.forecastday[dayIndex].day.condition.text}</p>
                    <img src={data.forecast.forecastday[dayIndex].day.condition.icon} className={s.img} alt='weather icon' />
                </div>
                <div className={s.parameters}>
                    <p className={`${s.parameter} ${s.itemMax}`}>Max temp: {data.forecast.forecastday[dayIndex].day.maxtemp_c}&#176;C</p>
                    <p className={`${s.parameter} ${s.itemMin}`}>Min temp: {data.forecast.forecastday[dayIndex].day.mintemp_c}&#176;C</p>
                    <p className={`${s.parameter} ${s.wind}`}>Wind speed: {data.forecast.forecastday[dayIndex].day.avgvis_km}&nbsp;km/h</p>
                    <p className={`${s.parameter} ${s.humidity}`}>Humidity: {data.forecast.forecastday[dayIndex].day.avghumidity}&nbsp;%</p>
                    <p className={`${s.parameter} ${s.rain}`}>Chance of rain: {data.forecast.forecastday[dayIndex].day.daily_chance_of_rain}&nbsp;%</p>
                    <p className={`${s.parameter} ${s.snow}`}>Chance of snow: {data.forecast.forecastday[dayIndex].day.daily_chance_of_snow}&nbsp;%</p>
                    <p className={`${s.parameter} ${s.uv}`}>UV: {data.forecast.forecastday[dayIndex].day.uv}</p>
                    <p className={`${s.parameter} ${s.moon}`}>Moon phase: {data.forecast.forecastday[dayIndex].astro.moon_phase}</p>
                    <p className={`${s.parameter} ${s.sunrise}`}>Sunrise: {data.forecast.forecastday[dayIndex].astro.sunrise}</p>
                    <p className={`${s.parameter} ${s.sunset}`}>Sunset: {data.forecast.forecastday[dayIndex].astro.sunset}</p>
                </div>
            </div>
        </Container>
    </section>
)}