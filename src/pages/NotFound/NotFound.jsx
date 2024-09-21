import { Link } from 'react-router-dom';
import s from './NotFound.module.css';

export const NotFound = () => (
    <div className={s.main}>
        <p className={s.text}>This city has not found.&#160;
            Please, try
            <Link to='/' className={s.link}> &#160;other location</Link>  
        </p>
    </div>
)