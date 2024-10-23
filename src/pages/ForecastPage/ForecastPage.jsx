import { Container } from "../../parts/Container/Container";
import s from './ForecastPage.module.css';
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../store/weather/weather.slice";
import { Loading } from "../../components/Loading/Loading";
import { ButtonClose } from "../../components/ButtonClose/ButtonClose";
import { reformateDate } from "../../helpers";
import { ForecastRow } from "../../components/ForecastRow/ForecastRow";
import { useParams } from "react-router-dom";
import { FavoriteButton } from "../../components/FavoriteButton/FavoriteButton";

export const ForecastPage = () => {
    const dispatch = useDispatch();
    const { city } = useParams();
    
    const { data, loading, error} = useSelector(state => state.weather);

    useEffect(() => {
        dispatch(fetchWeather(city));   
    }, [dispatch, city]);

    if (loading) return <div>loading Forecast...<Loading/></div>
    if (error) return <div>Error Forecast: {error}</div>

    if (!data) {
        return <div>Forecast<Loading /></div>
    }
    
    return (
        <section className='forecast'>
            <ButtonClose city={city} /> 
            <Container> 
                <div className={s.rowlocation}>
                    <h2 className={s.location}>{data.location.name}, {data.location.country}</h2>
                    <FavoriteButton city={city} />    
                </div>
                <table className="table">
                    <tbody className='list'>
                        {data?.forecast.forecastday.map((item, i) => (
                            // это же по факту thead
                            // давайте все что относится к заголовкам вынесем в thead, а в tbody оставим только ForecastRow
                            // то есть структура будет такой: 
                            // table
                            // thead - здесь будут th
                            // tbody - здесь будет ForecastRow

                            // также попробуйте побороть проблему `Each child in a list should have a unique "key" prop.`. это важно
                            // попробуйте понять каким образом она возникает и придумать способ ее пофиксить
                            <Fragment key={i}>
                            <tr className={s.rowdate} key={i}>
                                <th className='day'>
                                    <p className='firstitem'>{`${data?.forecast.forecastday[i].date.split('-')[2]}  `}</p>
                                    <p className='lastitem'>{`${reformateDate(data?.forecast.forecastday[i].date)}`}</p>
                                </th>
                            </tr> 
                            {/* вы в качестве key используете объект - это плохая идея  */}
                            <tr className={s.headrow} key={item}>
                                <th className={`${s.heading} ${s.time}`}>Time</th>  
                                <th className={`${s.heading} ${s.temp}`}>T &#176;C</th>   
                                <th className={`${s.heading} ${s.image}`}>Icon</th>
                                <th className={`${s.heading} ${s.text}`}>Condition</th>
                                <th className={`${s.heading} ${s.wind}`}>Wind</th>
                                <th className={`${s.heading} ${s.wind_dir}`}>Direct</th>
                                <th className={`${s.heading} ${s.feel}`}>Feeling</th>           
                            </tr>    
                                {item.hour.map((hour, j) => (                                    
                                    <ForecastRow data={hour} key={j} j={j} />                                                    
                                ))}        
                            </Fragment>   
                        ))}                   
                    </tbody>
                </table>        
            </Container>
        </section>
    )
}
