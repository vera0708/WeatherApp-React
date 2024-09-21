import { Link } from 'react-router-dom';
import s from './CardItem.module.css';
// import svg from './exampleIcon.svg';

export const CardItem = ({ day, month, data }) => {
    console.log('CartItem; ', data)
    return (
    <article className={s.card}>
        <Link to='#' className={s.link}>
            <h3 className={s.day}>{`${day} ${month}`}</h3>
            {/* <img src={svg} className={s.img} alt='weather icon'/> */}
            <img src={data?.forecastday[1].day.condition.icon} className={s.img} alt='weather icon' />
                <p className={s.temperature}>{data?.forecastday[1].day.avgtemp_c}</p>
            <div className={s.list}>
                    <p className={s.itemMin}>{data?.forecastday[1].day.maxtemp_c}</p>
                    <p className={s.itemMax}>{data?.forecastday[1].day.mintemp_c}</p>
            </div>
        </Link>
    </article>
)}