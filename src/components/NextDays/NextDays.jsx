import s from './NextDays.module.css';
import { Container } from '../../parts/Container/Container';
import { CardItem } from '../CardItem/CardItem';
import { reformateDate } from '../../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchWeather } from '../../store/weather/weather.slice';
import { Loading } from '../Loading/Loading';

export const NextDays = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.weather);

    useEffect(() => {
        dispatch(fetchWeather());
    }, [dispatch]);
    
    console.log('dataNextDays: ', data);

    if (loading) return <div>loading NextDay...<Loading/></div>
    if (error) return <div>Error NextDay: {error}</div>

    if (!data) {
        return <div>NextDays<Loading/></div>
    }

    const datalocaltime1 = data?.forecast.forecastday[1].date.split(' ')[0];
    const month1 = reformateDate(datalocaltime1);        
    const day1 = datalocaltime1.split('-')[2];

    const datalocaltime2 = data?.forecast.forecastday[2].date.split(' ')[0]
    const month2 = reformateDate(datalocaltime2);
    const day2 = datalocaltime2.split('-')[2]; 
    console.log('1 day: ', day1, month1, '2 day: ', day2, month2);

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