import { Link } from 'react-router-dom';
import { Container } from '../../parts/Container/Container';
import './ForecastButton.module.css';

export const ForecastButton = () => (
    <section className='forecastbutton'>
        <Container>
            <Link className='linkBtn' to='/forecast'>H O U R L Y</Link>
        </Container>
    </section>
)