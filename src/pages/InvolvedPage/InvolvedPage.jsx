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
        <p className={s.title}>Enter the city name.<br/></p>
        {/* давайте подумаем над этим экраном */}
        {/* с моей точки зрения я бы отцентровал эти надписи и написал что-то типа */}
        {/* для начала работы введите название города в поископую строку */}
        <span className={s.text}>You can choose different options</span>
    </div>
)}