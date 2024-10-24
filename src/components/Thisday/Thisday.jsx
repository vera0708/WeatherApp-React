import s from './Thisday.module.css';
import { Container } from '../../parts/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchWeather } from '../../store/weather/weather.slice';
import { reformateDate } from '../../helpers';
import { Loading } from '../Loading/Loading';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';

export const Thisday = () => {
    const dispatch = useDispatch();
        
    const {city } = useParams();
    const { data, loading, error } = useSelector(state => state.weather);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (pathname !== '/favorite') {
            dispatch(fetchWeather(city));     
        }        
    }, [dispatch, city, pathname]);

    if (loading) return <div>loading ThisDay...<Loading/></div>
    if (error) {
        navigate('/notFound')
    }

    if (!data) {
        return <div>ThisDay<Loading/></div>
    }

    const today = new Date();
    const options = { weekday: 'long' };
    const dayOfWeek = today.toLocaleString('en-US', options);
    
    const datalocaltime = data.location.localtime.split(' ')[0]
    const month = reformateDate(datalocaltime);
    const dayN = datalocaltime.split('-')[2];

    return (
    <section className={s.thisday}>
        <Container>   
            <div className={s.weather}>
                <FavoriteButton city={city} />
                <h2 className={s.title}>{data.location.name}, {data.location.country}</h2>  
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
        </Container>
    </section>
)}