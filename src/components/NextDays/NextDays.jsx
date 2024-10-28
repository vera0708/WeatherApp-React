import s from './NextDays.module.css';
import { Container } from '../../parts/Container/Container';
import { CardItem } from '../CardItem/CardItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchWeather } from '../../store/weather/weather.slice';
import { Loading } from '../Loading/Loading';
import { useNavigate, useParams } from 'react-router-dom';

export const NextDays = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { city } = useParams();

    const { data, loading, error } = useSelector(state => state.weather);

    useEffect(() => {
        dispatch(fetchWeather(city));
    }, [dispatch, city]);
 
    if (loading) return <div className="flex bg-[#beaac4] items-center justify-center py-3">loading NextDay...<Loading/></div>
    if (error) {
        navigate('/notFound')
    }

    if (!data) {
        return <div className="flex bg-[#beaac4] items-center justify-center py-3">No NextDays<Loading/></div>
    }
  
    return (
    <section className={s.nextdays}>
        <Container>
            <h2 className={s.title}>Coming days</h2>
                <ul className={s.list}>
                {data.forecast.forecastday.map((item, i) => (
                    <li key={i} className={s.item}>
                        <CardItem data={item} i={i} city={city} />               
                    </li> ))}
                </ul>      
        </Container>
    </section>
)}