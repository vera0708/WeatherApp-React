
import { Header } from './parts/Header/Header';
import { Footer } from './parts/Footer/Footer';
import { Main } from './parts/Main/Main';
import { Forecast } from './pages/Forecast/Forecast';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAccessToken } from './store/auth/auth.slice';
import { fetchForecast } from './store/forecast/forecast.slice';

function App() {
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector(state => state.auth);

  const { data: dataForecast,
    loading: loadingForecast,
    error: errorForecast
  } = useSelector(state => state.forecast);
  
  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
    dispatch(fetchForecast());
    
  }, [dispatch, accessToken]);

  if (loadingForecast) return <div>loading Forecast...</div>
  if (errorForecast) return <div>Error: {errorForecast}</div>

  return (
    <>
      <Header/>
      {!loading && accessToken ? <Main /> : <div>Loading...</div>}
      <Footer />
      <Forecast data={dataForecast} />
    </>
  )
}

export default App
