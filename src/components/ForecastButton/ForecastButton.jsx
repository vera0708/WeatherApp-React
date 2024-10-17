import { Link, useParams } from 'react-router-dom';
import { Container } from '../../parts/Container/Container';
import './ForecastButton.module.css';

export const ForecastButton = () => {
    const { city } = useParams();

    return (
    <section className='forecastbutton'>
        <Container>
            <Link className='linkBtn' to={`/forecast/city/${city}`}>H O U R L Y</Link>
        </Container>
    </section>
)}