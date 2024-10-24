import s from './Time.module.css';

export const Time = () => {
    const today = new Date();

    const options = {
        dateStyle: 'short',
        timeStyle: 'short',
    };

    return (<>
        <div className={s.time}>  
            {today.toLocaleString([], options)}
        </div>
    </>
    )
}