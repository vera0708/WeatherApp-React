import s from './Container.module.css'

// честно говоря не очень понимаю смысл данного компонента
// в чем принципиальное отличие этого компонента от обычного div 
export const Container = (props) => (
    <div className={`${s.container} ${props.className || ""}`}>
        {props.children}
    </div>
) 