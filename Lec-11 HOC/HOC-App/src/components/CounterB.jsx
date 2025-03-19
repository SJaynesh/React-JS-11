import WithHOC from "./WithHOC";
import style from '../CounterB.module.css'

const CounterB = ({ count, increase }) => {
    return (
        <>
            <h1 className={style.myTitle}>Counter B : {count}</h1>
            <button className={style.buttonB} onMouseOver={increase}>Add</button>
        </>
    );
}

export default WithHOC(CounterB, 5);