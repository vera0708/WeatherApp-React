import { useLocation } from 'react-router-dom';
import s from './InvolvedPage.module.css';
import { useSelector } from 'react-redux';

export const InvolvedPage = () => {
    const { pathname } = useLocation();
    const { favoriteList } = useSelector(state => state.favorite);
    
    if (pathname === '/favorite') {
        console.log('favoriteList: ', favoriteList)
    }

    return (
    <div className={s.main}>
        <p className={s.title}>Enter the city name to the Search&nbsp;field<br/></p>
        <p className={s.text}>Or you can choose one of your favorite location</p>
    </div>
)}