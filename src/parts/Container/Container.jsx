import s from './Container.module.css'

export const Container = (props) => (
    <div className={`${s.container} ${props.className || ""}`}>
        {props.children}
    </div>
) 