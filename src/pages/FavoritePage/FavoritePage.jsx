import { Link } from 'react-router-dom';
import s from './FavoritePage.module.css';

export const FavoritePage = () => (
    <div className={s.main}>
        <img
            className="mask mask-heart mb-6 mx-auto"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
        <p className={s.text}>This is the favorite page
            <Link to='/' className={s.link}> &#160;Go to the main page</Link>
        </p>
    </div>
)