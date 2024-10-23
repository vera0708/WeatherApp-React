import { drawDirectionWind } from '../../helpers';
import s from './ForecastRow.module.css';
import PropTypes from 'prop-types';

export const ForecastRow = ({ data, j }) => {

    return (
        <tr className={s.row}>            
            <td className={`${s.item} ${s.time}`}>{j} h</td>
            <td className={`${s.item} ${s.temp}`}>{data.temp_c}&#176;C</td>  
            <td className={`${s.item} ${s.image}`}>
                <img className={s.img} src={data.condition.icon} alt={data.condition.text} />
            </td>
            <td className={`${s.item} ${s.text}`}>{data.condition.text}</td>     
            <td className={`${s.item} ${s.wind}`}>{data.wind_kph} km/h</td>
            <td className={`${s.item} ${s.wind_dir}`} style={{ transform: `rotate(${drawDirectionWind(data.wind_dir)}deg)`}}>&#8595;</td> 
            <td className={`${s.item} ${s.feel}`}>{data.feelslike_c}&#176;C</td>
        </tr>
    )
}

ForecastRow.propTypes = {
    data: PropTypes.object,
    j: PropTypes.number,
}