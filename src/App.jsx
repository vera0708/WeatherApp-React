import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAccessToken } from './store/auth/auth.slice';
import { Header } from './parts/Header/Header';
import { Footer } from './parts/Footer/Footer';
import { Thisday } from './components/Thisday/Thisday';
import { NextDays } from './components/NextDays/NextDays';
import { Forecast } from './pages/Forecast/Forecast';
import { ForecastButton } from './components/ForecastButton/ForecastButton';
import { Loading } from './components/Loading/Loading';
import { NotFound } from './pages/NotFound/NotFound';
import { FavoritePage } from './pages/FavoritePage/FavoritePage';
import { WholeDay } from './pages/WholeDay/WholeDay';
import { InvolvedPage } from './pages/InvolvedPage/InvolvedPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <main>
          <Thisday />
          <NextDays />
          <ForecastButton />
        </main> 
        <Footer />
      </>
    )
  },
  {
    path: '/search',
    element: (
      <>
        <Header />
        <main>
          <InvolvedPage />
        </main>
        <Footer />
      </>
    )
  },
  {
    path: '/wholeday/:i',
    element: (
      <>
        <main>
          <WholeDay />  
          <NextDays />
        </main>
        <Footer />
      </>
    )
  },
  {
    path: '/forecast',
    element: (
      <>
        <Forecast />
        <Footer/>
      </>
    )
  },
  {
    path: '/favorite',
    element: (
      <>
        <FavoritePage />
      </>
    )
  },
  {
    path: '/notfound',
    element: (
      <>
        <NotFound />
      </>
    )
  },
])

function App() {
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector(state => state.auth);
  
  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, accessToken]);
  
  if (loading) {
    return <div>
      loading App...<Loading/>
    </div>
  }

  return (
    accessToken ?
      <RouterProvider router={router} />
      : <div>Loading token...<Loading /></div>
    // <>
    //   <Header />
    //   {!loading && accessToken ? <Main/> : <div>Loading...</div>}
    //   <Footer />
    //   {!loading && accessToken ? <Forecast /> : <div>Loading...</div>}
    // </>
    )
  }

export default App
