import { Link, useParams } from 'react-router-dom';
import { Container } from '../../parts/Container/Container';
import s from './ForecastButton.module.css';

export const ForecastButton = () => {
    const { city } = useParams();

    return (
    <section className={s.forecastbutton}>
        <Container>
            <Link className={s.linkBtn} to={`/forecast/city/${city}`}>H O U R L Y</Link>
        </Container>
    </section>
)}