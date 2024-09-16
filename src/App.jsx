
import { Header } from './parts/Header/Header';
import { Footer } from './parts/Footer/Footer';
import { Main } from './parts/Main/Main';
import { Forecast } from './pages/Forecast/Forecast';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAccessToken } from './store/auth/auth.slice';

function App() {
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector(state => state.auth);
  
  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, accessToken]);

  return (
    <>
      <Header />
      {!loading && accessToken ? <Main/> : <div>Loading...</div>}
      <Footer />
      <Forecast />
    </>
  )
}

export default App
