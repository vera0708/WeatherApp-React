import { Link, useParams } from 'react-router-dom';
import { Container } from '../../parts/Container/Container';
import './ForecastButton.module.css';

export const ForecastButton = () => {
    const { city } = useParams();

    return (
        // в других местах вы же делали import styles from './ForecastButton.module.css'? 
        // сделайте лучше как везде
    <section className='forecastbutton'>
        <Container>
            <Link className='linkBtn' to={`/forecast/city/${city}`}>H O U R L Y</Link>
        </Container>
    </section>
)}