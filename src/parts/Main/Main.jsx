import { ForecastButton } from "../../components/ForecastButton/ForecastButton";
import { NextDays } from "../../components/NextDays/NextDays";
import { Thisday } from "../../components/Thisday/Thisday";
import s from './Main.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWeather } from "../../store/weather/weather.slice";

export const Main = () => {
    const dispatch = useDispatch();
    const { data: dataWeather,
        loading: loadingWeather,
        error: errorWeather
    } = useSelector(state => state.weather);

    useEffect(() => {
        dispatch(fetchWeather());
    }, [dispatch]);

    if (loadingWeather) return <div className="flex bg-[#beaac4] items-center justify-center">loading Weather...</div>
    if (errorWeather) return <div className="flex bg-[#beaac4] items-center justify-center">Error: {errorWeather}</div>

     return (
        <main className={s.main}>
            <h1 className={`${s.title} visually-hidden`}>WeatherApp</h1>
            {dataWeather ? <Thisday data={dataWeather} /> : <div className="flex bg-[#beaac4] items-center justify-center">Loading This day...</div>}
            {dataWeather ? <NextDays data={dataWeather} />: <div className="flex bg-[#beaac4] items-center justify-center">Loading Next days...</div>}
            <ForecastButton />
        </main>
    )
}