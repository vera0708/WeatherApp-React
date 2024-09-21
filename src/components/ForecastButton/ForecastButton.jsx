import { Link } from 'react-router-dom';
import { Container } from '../../parts/Container/Container';
import './ForecastButton.module.css';

export const ForecastButton = () => (
    <section className='forecastbutton'>
        <Container>
            <Link className='linkBtn' to='/forecast'>Next 14 days</Link>
        </Container>
    </section>
)