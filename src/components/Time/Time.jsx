import s from './Time.module.css';

export const Time = () => {
    const today = new Date();
    // console.log('today: ', today);
    // const options = { weekday: 'long' };
    // const dayOfWeek = today.toLocaleString('en-US', options);
    // console.log(dayOfWeek);

    // у меня лично отображение слеюущее: 20/10/2024, 21:27:59
    // видимо из-за toLocaleString
    // я думаю врея не имеет большого значения, поэтому имеет смысл сделать toLocateDateString, 
    // чтобы отображать только дату
    // если хотите отображать время, то нужно придумать как отображать время, если оно перестало быть актуальным (у меня показываются секунды)
    
    return (
        <div className={s.time}>
         {today.toLocaleString()}
        </div>
    )
}