import s from './Time.module.css';

export const Time = () => {
    const today = new Date();

    return (
        <div className={s.time}>
         {today.toLocaleString()}
        </div>
    )
}