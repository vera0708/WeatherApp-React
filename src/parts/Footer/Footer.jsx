import { Contacts } from "../../components/Contacts/Contacts";
import { Developers } from "../../components/Developers/Developers";
import { Container } from "../Container/Container";
import s from './Footer.module.css'

export const Footer = () => (
    <footer className={s.footer}>
        <Container className={s.container}>
            <div className={s.contacts}>
                <Contacts />
            </div>
            <div className={s.developers}>
                <Developers />
            </div>
            <p className={s.copyright}>@WeatherApp, 2024</p>
        </Container>
    </footer>
)