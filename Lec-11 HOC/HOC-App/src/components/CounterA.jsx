import WithHOC from "./WithHOC";
import style from '../CounterA.module.css'


const CounterA = (props) => {

    const nameStyle = { color: "purple", fontSize: 35 };
    return (
        <>
            <div className={style.container}>
                <h1 style={nameStyle}>Jaynesh Sarkar</h1>
                <h1>Counter A : {props.count}</h1>
                <button className={style.buttonA} onClick={props.increase}>Add</button>
            </div>
        </>
    );
}

export default WithHOC(CounterA, 10);