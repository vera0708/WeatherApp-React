import { Container } from "../../parts/Container/Container";
import svg from './exampleIcon.svg';
import './Forecast.module.css';
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchForecast } from "../../store/forecast/forecast.slice";

export const Forecast = () => {
    // const dispatch = useDispatch();
    
    // const { data: dataForecast,
    //   loading: loadingForecast,
    //   error: errorForecast
    // } = useSelector(state => state.forecast);

    // useEffect(() => {
    //     dispatch(fetchForecast());   
    // }, [dispatch]);

    // console.log('dataMain: ', dataForecast);

    // if (loadingForecast) return <div>loading Forecast...</div>
    // if (errorForecast) return <div>Error: {errorForecast}</div>
   
    return (
    <section className='forecast'>
        <Container>
            <table className="table">
                <tbody className='list'>
                        {/* row 1 */}
                    <tr className='item'>
                        <td className='day'>
                            <p className='firstitem'>9 October</p>
                            <p className='lastitem'>Wednesday</p>
                        </td>    
                        <td className='falls'>
                            <div className="avatar">
                                <img src={svg} alt="weather icon" />
                            </div>
                        </td>
                        <td className='temperature'>
                                <p className='firstitem'>18*</p>
                                <p>10*</p>
                        </td>
                    </tr>
                        {/* row 2 */}
                    <tr className='item'>
                        <td className='day'>
                            <p className='firstitem'>11 October</p>
                            <p className='lastitem'>Friday</p>
                        </td>
                        <td className='falls'>
                            <div className="avatar">
                                <img src={svg} className="img"  alt="weather icon" />
                            </div>
                        </td>
                        <td className='temperature'>
                            <p className='firstitem'>17*</p>
                            <p>8*</p>
                        </td>
                        </tr>
                        {/* row 3 */}
                    <tr className='item'>
                        <td className='day'>
                            <p className='firstitem'>13 October</p>
                            <p className='lastitem'>Sunday</p>
                        </td>
                        <td className='falls'>
                            <div className="avatar">
                                <img src={svg} alt="weather icon" />
                            </div>
                        </td>
                        <td className='temperature'>
                            <p className='firstitem'>16*</p>
                            <p>7*</p>
                        </td>
                     </tr>
                        {/* row 4 */}
                    <tr className='item'>
                        <td className='day'>
                            <p className='firstitem'>14 October</p>
                            <p className='lastitem'>Monday</p>
                        </td> 
                        <td className='falls'> 
                            <div className="avatar">
                                <img src={svg} alt="weather icon" />
                            </div>
                        </td>
                        <td className='temperature'>
                            <p className='firstitem'>14*</p>
                            <p>6*</p>
                         </td>
                    </tr>
                </tbody>
            </table>
        </Container>
    </section>
)
}
