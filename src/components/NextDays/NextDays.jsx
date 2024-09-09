import { Container } from '../../parts/Container/Container';
import { CardItem } from '../CardItem/CardItem';
import s from './NextDays.module.css';

export const NextDays = () =>  (
    <section className={s.nextdays}>
        <Container>
            <h2 className={s.title}>Next 4 Days</h2>
            <ul className={s.list}>
                <li className={s.item}>
                    <CardItem day={'day1'} />
                </li> 
                <li className={s.item}>
                    <CardItem day={'day2'} />        
                </li> 
                <li className={s.item}>
                    <CardItem day={'day3'} />
                </li>
                <li className={s.item}>
                    <CardItem day={'day4'} />
                </li>
            </ul>        
        </Container>
    </section>
)