import { Container } from '../../parts/Container/Container';
import s from './ForecastButton.module.css';

export const ForecastButton = () => (
    <section className={s.forecastbutton}>
        <Container>
            <a className={s.link} href='#'>Next 14 days</a>
        </Container>
    </section>
)