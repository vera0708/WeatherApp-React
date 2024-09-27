import s from './NextDays.module.css';
import { Container } from '../../parts/Container/Container';
import { CardItem } from '../CardItem/CardItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchWeather } from '../../store/weather/weather.slice';
import { Loading } from '../Loading/Loading';
import { useParams } from 'react-router-dom';

export const NextDays = () => {
    const dispatch = useDispatch();

    const { cityName } = useParams();

    const { data, loading, error } = useSelector(state => state.weather);

    useEffect(() => {
        dispatch(fetchWeather(cityName));
    }, [dispatch, cityName]);
    
    // console.log('dataNextDays: ', data);

    if (loading) return <div>loading NextDay...<Loading/></div>
    if (error) return <div>Error NextDay: {error}</div>

    if (!data) {
        return <div>NextDays<Loading/></div>
    }
  
    return (
    <section className={s.nextdays}>
        <Container>
            <h2 className={s.title}>Coming days</h2>
            {data ? 
                <ul className={s.list}>
                {data.forecast.forecastday.map((item, i) => (
                    <li key={i} className={s.item}>
                        <CardItem data={item} i={i} />               
                    </li> ))}
                    {/* <li className={s.item}>
                            <CardItem day={day1} month={month1} data={data?.forecast}/>
                    </li> 
                    <li className={s.item}>
                            <CardItem day={day2} month={month2} data={data?.forecast}/>        
                    </li>  */}
                </ul>
             : <div>Loading NextDays...</div>}         
        </Container>
    </section>
)}