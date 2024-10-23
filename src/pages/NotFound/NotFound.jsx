import { Link } from 'react-router-dom';
import s from './NotFound.module.css';

export const NotFound = () => (
    <div className={s.main}>
        <p className={s.text}>This city has not been found.&#160;
            Please, try&#160;     &#160;
            <Link to='/' className={s.link}> other&nbsp;location</Link>  
        </p>
    </div>
)