import { Container } from '../../parts/Container/Container';
import './ForecastButton.module.css';

export const ForecastButton = () => (
    <section className='forecastbutton'>
        <Container>
            <a className='linkBtn' href='#'>Next 14 days</a>
        </Container>
    </section>
)