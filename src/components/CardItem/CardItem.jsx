import { Link } from 'react-router-dom';
import s from './CardItem.module.css';
import { reformateDate } from '../../helpers';
// import svg from './exampleIcon.svg';

export const CardItem = ({ data, i, city }) => {
    if (!data) {
        return <div>Cart item Loading...</div>
    }

    const datalocaltime = data?.date.split(' ')[0];
    const month = reformateDate(datalocaltime);
    const day = datalocaltime.split('-')[2];
    console.log('CartItem cityName ', city);
    return (
    <article className={s.card}>
            <Link to={`/wholeday/city/${city}/${i}`} city={city} className={s.link}>
            {/* <h3 className={s.day}>{data?.date}</h3> */}
            <h3 className={s.day}>{`${day} ${month}`}</h3>
            <img src={data?.day.condition.icon} className={s.img} alt='weather icon' />
                <p className={s.temperature}>{data?.day.condition.text}</p>
            <div className={s.list}>
                <p className={s.itemMin}>{data?.day.maxtemp_c}&#176;C</p>
                <p className={s.itemMax}>{data?.day.mintemp_c}&#176;C</p>
            </div>
        </Link>
    </article>
)}