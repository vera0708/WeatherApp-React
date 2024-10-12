import { useDispatch, useSelector } from 'react-redux';
import { ButtonClose } from '../../components/ButtonClose/ButtonClose';
import { reformateDate } from '../../helpers';
import { Container } from '../../parts/Container/Container';
import s from './WholeDay.module.css';
import { useEffect } from 'react';
import { fetchForecast } from '../../store/forecast/forecast.slice';
import { Loading } from '../../components/Loading/Loading';
import { useParams } from 'react-router-dom';
// import { FavoriteButton } from '../../components/FavoriteButton/FavoriteButton';

export const WholeDay = () => {
    
    const dispatch = useDispatch();
    const { city } = useParams();
    const { i } = useParams();
    const { data, loading, error } = useSelector(state => state.forecast);

    useEffect(() => {
        dispatch(fetchForecast());
    }, [dispatch]);

    console.log('dataForecast city: ', city);
    console.log('i: ', i);

    if (loading) return <div>loading Forecast...<Loading /></div>
    if (error) return <div>Error Forecast: {error}</div>

    if (!data) {
        return <div>WholeDay<Loading /></div>
    }

    const datalocaltime = data?.forecast.forecastday[i].date;
    const month = reformateDate(datalocaltime);
    const dayN = datalocaltime.split('-')[2];

    return (
    <section className={s.wholeday}>
            <div className='flex justify-between mx-10 mb-5 items-center'>
            {/* <FavoriteButton /> */}
          <ButtonClose />      
        </div>
            
        <Container>
            {data ?
                <div className={s.weather}>
                    <h2 className={s.title}>{data.location.name}, {data.location.country}</h2>
                    <h3 className={s.title}>{dayN} {month}</h3>
                        <p className={s.temperature}>{data.forecast.forecastday[i].day.avgtemp_c}&#176;C</p>
                    <div className={s.precipitation}>
                        <p className={s.text}>{data.forecast.forecastday[i].day.condition.text}</p>
                        <img src={data.forecast.forecastday[i].day.condition.icon} className={s.img} alt='weather icon' />
                    </div>
                    <div className={s.parameters}>
                        <p className={`${s.parameter} ${s.itemMax}`}>Max temp: {data.forecast.forecastday[i].day.maxtemp_c}&#176;C</p>
                        <p className={`${s.parameter} ${s.itemMin}`}>Min temp: {data.forecast.forecastday[i].day.mintemp_c}&#176;C</p>
                        <p className={`${s.parameter} ${s.wind}`}>Wind speed: {data.forecast.forecastday[i].day.avgvis_km}&nbsp;km/h</p>
                        <p className={`${s.parameter} ${s.humidity}`}>Humidity: {data.forecast.forecastday[i].day.avghumidity}&nbsp;%</p>
                        <p className={`${s.parameter} ${s.rain}`}>Chance of rain: {data.forecast.forecastday[i].day.daily_chance_of_rain}&nbsp;%</p>
                        <p className={`${s.parameter} ${s.snow}`}>Chance of snow: {data.forecast.forecastday[i].day.daily_chance_of_snow}&nbsp;%</p>
                        <p className={`${s.parameter} ${s.uv}`}>UV: {data.forecast.forecastday[i].day.uv}</p>
                        <p className={`${s.parameter} ${s.moon}`}>Moon phase: {data.forecast.forecastday[i].astro.moon_phase}</p>
                        <p className={`${s.parameter} ${s.sunrise}`}>Sunrise: {data.forecast.forecastday[i].astro.sunrise}</p>
                        <p className={`${s.parameter} ${s.sunset}`}>Sunset: {data.forecast.forecastday[i].astro.sunset}</p>
                    </div>
                </div>
                : <div>Loading This day...</div>}
        </Container>
    </section>
)}