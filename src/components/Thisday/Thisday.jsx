import s from './Thisday.module.css';
import { Container } from '../../parts/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchWeather } from '../../store/weather/weather.slice';
import { reformateDate } from '../../helpers';
import { Loading } from '../Loading/Loading';

export const Thisday = () => {
    const dispatch = useDispatch();

    const { data, loading, error} = useSelector(state => state.weather);

    useEffect(() => {
        dispatch(fetchWeather());
    }, [dispatch]);

  if (loading) return <div>loading ThisDay...<Loading/></div>
    if (error) return <div>Error ThisDay: {error}</div>

    if (!data) {
        return <div>ThisDay<Loading/></div>
    }
    console.log('dataWeather: ', data);  

    const today = new Date();
    const options = { weekday: 'long' };
    const dayOfWeek = today.toLocaleString('en-US', options);
    
    const datalocaltime = data?.location.localtime.split(' ')[0]
    const month = reformateDate(datalocaltime);
    const dayN = datalocaltime.split('-')[2];

    return (
        <section className={s.thisday}>
        <Container>
        {data ?             
            <div className={s.weather}>
                <h2 className={s.title}>{data.location.name}, {data.location.country}</h2>  
                {/* <h3 className={s.title}>{dayOfWeek.toUpperCase()}</h3>      */}
                <h3 className={s.title}>{dayOfWeek.toUpperCase()}, {dayN} {month}</h3>
                    <p className={s.temperature}>{data.current.temp_c}&#176;C</p>
                <div className={s.precipitation}>
                    <p className={s.text}>{data.current.condition.text}</p>
                    <img src={data.current.condition.icon} className={s.img} alt='weather icon' />
                </div>
               
                <div className={s.parameters}>
                    <p className={`${s.parameter} ${s.humidity}`}>Humidity: {data.current.humidity}&nbsp;%</p>
                    <p className={`${s.parameter} ${s.wind}`}>Wind speed: {data.current.wind_kph}&nbsp;km/h</p>
                    <p className={`${s.parameter} ${s.feeling}`}>Feel like: {data.current.feelslike_c}&#176;C</p>
                    <p className={`${s.parameter} ${s.uv}`}>UV: {data.current.uv}</p>    
                    <p className={`${s.parameter} ${s.sunrise}`}>Sunrise: {data.forecast.forecastday[0].astro.sunrise}</p> 
                    <p className={`${s.parameter} ${s.sunset}`}>Sunset: {data.forecast.forecastday[0].astro.sunset}</p>
                </div>                
            </div>
            : <div>No matches for your query...</div> }
        </Container>
    </section>
)}