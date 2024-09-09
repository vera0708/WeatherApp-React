import { Container } from '../../parts/Container/Container';
import s from './Thisday.module.css';
import svg from './exampleIcon.svg';

export const Thisday = () => (
    <section className={s.thisday}>
        <Container>
            <div className={s.weather}>
                <h3 className={s.title}>The day</h3>
                <p className={s.temperature}>20*</p>
                <div className={s.precipitation}>
                    <p className={s.text}>almost////// ....... never</p>
                    <img src={svg} className={s.img} alt='weather icon' />
                </div>
               
                <div className={s.parameters}>
                    <p className={`${s.parameter} ${s.humidity}`}>Humidity: 53%</p>
                    <p className={`${s.parameter} ${s.wind}`}>Wind speed: 2.8&nbsp;km/h</p>
                    <p className={`${s.parameter} ${s.sunrise}`}>Sunrise: 6&nbsp;AM</p>
                    <p className={`${s.parameter} ${s.sunset}`}>Sunset: 8&nbsp;PM</p>
                </div>                
            </div>
        </Container>
    </section>
)