import { Link } from 'react-router-dom';
import s from './CardItem.module.css';
import { reformateDate } from '../../helpers';
import PropTypes from 'prop-types';

export const CardItem = ({ data, i, city }) => {
    if (!data) {
        // можно добавить лоадер сюда 
        // 
        // а если данных действительно нет, будет бесконечно показываться этот лоадинг?
        return <div>Cart item Loading...</div>
    }

    const datalocaltime = data?.date.split(' ')[0];
    const month = reformateDate(datalocaltime);
    const day = datalocaltime.split('-')[2];

    return (
        // все хорошо, но я бы на вашем месте убрал бы тэг article и переместил бы стили в link
        // дело в том, что когда фокус на данной ссылке, то у нее странный outline 
        <article className={s.card}>
            <Link to={`/wholeday/city/${city}/${i}`} city={city} className={s.link}>
                <h3 className={s.day}>{`${day} ${month}`}</h3>
                <img src={data?.day.condition.icon} className={s.img} alt='weather icon' />
                <p className={s.temperature}>{data?.day.condition.text}</p>
                <div className={s.list}>
                   <p className={s.itemMin}>{data?.day.maxtemp_c}&#176;C</p>
                   <p className={s.itemMax}>{data?.day.mintemp_c}&#176;C</p>
                </div>
            </Link>
        </article>
    )
}

CardItem.propTypes = {
    data: PropTypes.object,
    i: PropTypes.number,
    city: PropTypes.string,
}