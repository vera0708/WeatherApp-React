import { Link } from 'react-router-dom';
import s from './ButtonClose.module.css';

export const ButtonClose = ({ city }) => {

    let link;

    if (!city) {
        link = '/';
    } else {
        link = `/city/${city}`;
    }

    return (
    <Link to={link} city={city}>
        <button className={s.close}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={s.closeSVG}
                width="24" height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </Link> 
)}