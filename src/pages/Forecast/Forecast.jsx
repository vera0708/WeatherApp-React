import { Container } from "../../parts/Container/Container";
import svg from './exampleIcon.svg';
import './Forecast.module.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchForecast } from "../../store/forecast/forecast.slice";
import { Loading } from "../../components/Loading/Loading";
import { ButtonClose } from "../../components/ButtonClose/ButtonClose";
import { reformateDate } from "../../helpers";

export const Forecast = () => {
    const dispatch = useDispatch();
    
    const { data, loading, error} = useSelector(state => state.forecast);

    useEffect(() => {
        dispatch(fetchForecast());   
    }, [dispatch]);

    console.log('dataForecast: ', data);

    if (loading) return <div>loading Forecast...<Loading/></div>
    if (error) return <div>Error Forecast: {error}</div>

    if (!data) {
        return <div>Forecast<Loading /></div>
    }
   
    return (
        <section className='forecast'>
            <div className='mb-5'>
               <ButtonClose />  
            </div>           
            <Container> 
                <table className="table">
                    <tbody className='list'>
                        <tr>
                            <th className='day'>
                                <p className='firstitem'>{`${data?.forecast.forecastday[1].date.split('-')[2]} / `}</p>
                                <p className='lastitem'>{data?.forecast.forecastday[1].date.split('-')[1]}</p>
                            </th>   
                        </tr>
                        {/* row 1 */}
                        {data.forecast.forecastday.map((item, i) => (
                            <tr className='item' key={i}>
                                <td className='falls'>
                                    <div className="avatar">
                                        <img src={svg} alt="weather icon" />
                                    </div>                                    
                                </td> 
                                <td className='temperature'>
                                    <p className='firstitem'>{item.day.maxtemp_c}</p>
                                    <p>{item.day.mintemp_c}</p>
                                </td>    
                            </tr>        
                        ))}                      
                        {/* row 2 */}
                        <tr>
                            <th className='day'>
                                <p className='firstitem'>{`${data?.forecast.forecastday[1].date.split('-')[2]} / `}</p>
                                <p className='lastitem'>{`${reformateDate(data?.forecast.forecastday[1].date.split('-')[1])}`}</p>
                            </th>
                        </tr>
                        <tr className='item'>
                            <td className='day'>
                                <p className='firstitem'>11 October</p>
                                <p className='lastitem'>Friday</p>
                            </td>
                            <td className='falls'>
                                <div className="avatar">
                                    <img src={svg} className="img" alt="weather icon" />
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
