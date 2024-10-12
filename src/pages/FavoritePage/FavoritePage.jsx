// import { Link } from 'react-router-dom';
import { ButtonClose } from '../../components/ButtonClose/ButtonClose';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { Container } from '../../parts/Container/Container';
import s from './FavoritePage.module.css';
import { useSelector } from 'react-redux';

export const FavoritePage = () => {
    // const dispatch = useDispatch();
    const { favoriteList } = useSelector(state => state.favorite);

    // useEffect(() => {
    // if (pathname === '/favorite') {
        console.log('favoriteList: ', favoriteList)
        // dispatch(fetchWeather({list: favoriteList.join(',')}));
    // }
    // }, [dispatch, favoriteList, pathname]);
    return (
        <div className={s.main}>
            <Container> 
                <ButtonClose />  
                <div className={s.favorite}>                       
                    <SearchForm /> 
                    <img className="mask mask-heart w-9 lg:w-24 md:w-16 sm:w-11 "
                      src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
                </div>           
        
                <h3 className={s.subtitle}>This is your favorite page:</h3>
                <ol className={s.list}>
                {favoriteList.map((item, i) => (
                    <li className={s.item}  key={i}>{item}</li>
                ))}
                </ol>
                <table className="table">

                </table>
            <p className={s.text}>{favoriteList[0]}</p>
            <p className={s.text}>{favoriteList[1]}</p>
            <p className={s.text}>{favoriteList[2]}</p>
            {/* <table className={s.table}>
                <tbody>
                    {favoriteList.map((item, i) => (
                        <tr className={s.row} key={i}>
                            <td className={s.field}>{item[i]}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            {/* <Link to='/' className={s.link}> &#160;Go to the main page</Link>         */}
            </Container>
        </div>
)}