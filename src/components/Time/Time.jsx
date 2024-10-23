import s from './Time.module.css';

export const Time = () => {
    const today = new Date();

    const options = {
        dateStyle: 'short',
        timeStyle: 'short',
    }
    // я думаю врея не имеет большого значения, поэтому имеет смысл сделать toLocateDateString, 
    // чтобы отображать только дату
    // если хотите отображать время, то нужно придумать как отображать время, если оно перестало быть актуальным (у меня показываются секунды)
     {/* {setInterval(today.toLocaleString(), 1000)} */}
    return (
        <div className={s.time}>           
            {today.toLocaleString([], options)}
        </div>
    )
}