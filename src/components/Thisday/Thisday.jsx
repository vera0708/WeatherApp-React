import { reformateDate } from '../../helpers';
import { Container } from '../../parts/Container/Container';
import s from './Thisday.module.css';
// import svg from './exampleIcon.svg';

// export const Thisday = () => (
export const Thisday = ({ data }) => {
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
                    <h2 className={s.title}>{data.location.name}, {data.location.country}</h2>   
                    <h3 className={s.title}>{dayOfWeek.toUpperCase()}, {dayN} {month}</h3>
                {/* <p className={s.temperature}>13&#176;C</p>                        
                    <h3 className={s.title}>{data.current.last_updated}</h3>*/}
                    <p className={s.temperature}>{data.current.temp_c}&#176;C</p>
                <div className={s.precipitation}>
                    {/* <p className={s.text}>bla-bla-bla</p> 
                        <img src={svg} className={s.img} alt='weather icon' /> */}
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
                    
                     
                    {/* <p className={`${s.parameter} ${s.humidity}`}>Humidity: 93&nbsp;%</p> 
                    <p className={`${s.parameter} ${s.wind}`}>Wind speed: 2&nbsp;km/h</p>
                    <p className={`${s.parameter} ${s.sunrise}`}>UV: 3</p>
                    <p className={`${s.parameter} ${s.sunset}`}>Feel like: 11&#176;C</p>*/}
                </div>                
            </div>
        </Container>
    </section>
)}