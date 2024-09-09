import { ForecastButton } from "../../components/ForecastButton/ForecastButton";
import { NextDays } from "../../components/NextDays/NextDays";
import { Thisday } from "../../components/Thisday/Thisday";
import s from './Main.module.css'

export const Main = () => (
    <main className={s.main}>
        <h1 className={`${s.title} visually-hidden`}>WeatherASpp</h1>
        <Thisday />
        <NextDays />
        <ForecastButton />
    </main>
)