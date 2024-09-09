import s from './CardItem.module.css';
import svg from './exampleIcon.svg';

export const CardItem = ({day}) => (
    <article className={s.card}>
        <a href='#' className={s.link}>
            <h3 className={s.day}>{`${day}`}</h3>
            <img src={svg} className={s.img} alt='weather icon'/>
       
            <p className={s.temperature}>20*</p>
            <div className={s.list}>
                <p className={s.itemMin}>11*</p>
                <p className={s.itemMax}>21*</p>
            </div>
        </a>
    </article>
)