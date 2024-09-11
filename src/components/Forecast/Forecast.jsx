import { Container } from '../../parts/Container/Container';
import s from './Forecast.module.css';
import svg from './exampleIcon.svg';

export const Forecast = () => (
    <section className={s.forecast}>
        <Container>
            <ul className={s.list}>
                <li className={s.item}>
                    <div className={s.day}>
                        <p className={s.firstitem}>09 September</p>
                        <p className={s.lastitem}>Monday</p>
                    </div>
                    <img src={svg} className={s.img} alt='weather icon' />
                    <div className={s.temperature}>
                        <p className={s.firstitem}>21*</p>
                        <p>11*</p>
                    </div>
                </li>
                <li className={s.item}>
                    <div className={s.day}>
                        <p className={s.firstitem}>11 September</p>
                        <p className={s.lastitem}>Wednesday</p>
                    </div>
                    <img src={svg} className={s.img} alt='weather icon' />
                    <div className={s.temperature}>
                        <p className={s.firstitem}>18*</p>
                        <p>10*</p>
                    </div>
                </li>
                <li className={s.item}>
                    <div className={s.day}>
                        <p className={s.firstitem}>13 September</p>
                        <p className={s.lastitem}>Friday</p>
                    </div>
                    <img src={svg} className={s.img} alt='weather icon' />
                    <div className={s.temperature}>
                        <p className={s.firstitem}>16*</p>
                        <p>9*</p>
                    </div>
                </li>
                <li className={s.item}>
                    <div className={s.day}>
                        <p className={s.firstitem}>15 September</p>
                        <p className={s.lastitem}>Sunday</p>
                    </div>
                    <img src={svg} className={s.img} alt='weather icon' />
                    <div className={s.temperature}>
                        <p className={s.firstitem}>18*</p>
                        <p>8*</p>
                    </div>
                </li>
            </ul>
        </Container>
    </section>
)