import s from './Time.module.css';

export const Time = () => {
    const today = new Date();
    // console.log('today: ', today);
    // const options = { weekday: 'long' };
    // const dayOfWeek = today.toLocaleString('en-US', options);
    // console.log(dayOfWeek);

    return (
        <div className={s.time}>
         {today.toLocaleString()}
        </div>
    )
}