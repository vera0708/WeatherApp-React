import { ButtonClose } from '../../components/ButtonClose/ButtonClose';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { Container } from '../../parts/Container/Container';
import s from './FavoritePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorite } from '../../store/favorite/favorite.slice';
import { useNavigate } from 'react-router-dom';

export const FavoritePage = () => {
    const dispatch = useDispatch();
    const { favoriteList } = useSelector(state => state.favorite);
    const navigate = useNavigate();

    const handleDeleteCity = (city) => {
        dispatch(removeFromFavorite(city));
    }

    const handleCityInput = (city) => {
        navigate(`/city/${encodeURIComponent(city)}`);
    }

    return (
        <div className={s.main}>
            <Container> 
                <div className='flex mb-5 items-center justify-center'>
                    <ButtonClose />     
                </div>                
                <div className={s.favorite}>                       
                    <SearchForm /> 
                    <img className="mask mask-heart w-9 lg:w-24 md:w-16 sm:w-11 "
                      src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
                </div>           
                <h3 className={s.subtitle}>This is your favorite page:</h3>
                <table className="table">
                    <tbody>
                        {favoriteList.map((item, i) => (
                            <tr className={s.row} key={i}>
                                <td className={`${s.item} ${s.city}`}>
                                    <button type='button'
                                        onClick={() => handleCityInput(item)}>
                                       {item} 
                                    </button>
                                </td>
                                <td className={`${s.item} ${s.del}`}>
                                    <button type='button'
                                        className={s.delBtn}
                                        onClick={() => handleDeleteCity(item)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            width="18" height="18"
                                            viewBox="0 0 22 22"
                                            fill="none" >
                                            <path d="M2 2L22 22"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round" />
                                            <path d="M2 22L22 2"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        </div>
    )
}