import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header } from './parts/Header/Header';
import { Footer } from './parts/Footer/Footer';
import { Thisday } from './components/Thisday/Thisday';
import { NextDays } from './components/NextDays/NextDays';
import { ForecastPage } from './pages/ForecastPage/ForecastPage';
import { ForecastButton } from './components/ForecastButton/ForecastButton';
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
          <InvolvedPage />
        </main>
        <Footer />
      </>
    )
  },
  {
    path: '/city/:city',
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
    path: '/wholeday/city/:city/:dayIndex',
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
    path: '/forecast/city/:city',
    element: (
      <>
        <ForecastPage />
        <Footer/>
      </>
    )
  },
  {
    path: '/favorite',
    element: (
      <>
        <FavoritePage />
        <Footer/>
      </>
    )
  },
  {
    path: '/notFound',
    element: (
      <>
        <NotFound />
        <Footer/>
      </>
    )
  },
], {basename: '/WeatherApp-React'})

function App() {
  return (
      <RouterProvider router={router} />
    )
  }

export default App
