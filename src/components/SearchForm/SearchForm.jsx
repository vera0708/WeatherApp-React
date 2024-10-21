import { useNavigate } from 'react-router-dom'
import s from './SearchForm.module.css'

export const SearchForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchCity = event.target.search.value;

        // все отлично, но с моей точки зрения было бы лучше сделать новую переменну и присвоить ей searchCity.trim()
        if (searchCity.trim()) {
            navigate(`/city/${encodeURIComponent(searchCity.trim())}`);
            event.target.reset();
        }
    }

    return(
        <form className={s.searchForm}
            onSubmit={handleSubmit}>
            <input type='search'
                name='search'
                placeholder='Search'
                className={s.input} />
            <button type='submit' className={s.button}>
                {/* та иконка какая-то странная была, я заменил ее, вроде выглядит нормально, если кнопке проставить top: 50%; */}
                {/* как по мне, выглядит лучше */}
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
                {/* <svg width="36" height="36" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.66683 13.9999C11.1646 13.9999 14.0002 11.1644 14.0002 7.66659C14.0002 4.16878 11.1646 1.33325 7.66683 1.33325C4.16903 1.33325 1.3335 4.16878 1.3335 7.66659C1.3335 11.1644 4.16903 13.9999 7.66683 13.9999Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                <path d="M14.6668 14.6666L13.3335 13.3333"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                </svg> */}
            </button> 
        </form>
    ) 
}
