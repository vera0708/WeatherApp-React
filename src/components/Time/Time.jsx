import s from './Time.module.css';
import { useState } from 'react';

export const Time = () => {
    const [count, setCount] = useState(0)

    return (
    <div className={s.time}>
            <button onClick={() => setCount((count) => count + 1)}>
                Today {count}
            </button>
        Sept 2024 10:08
    </div>
)}