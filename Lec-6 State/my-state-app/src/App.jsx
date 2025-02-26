import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';

function App() {
    // Dynamic Component

    // useState is hook. Hook  =>  state update.
    // Syntax:
    // const [stateName, stateUpdateMethod] = useState(Default Value)

    const [count, setCount] = useState(0);

    // function updateVal() {
    //     setCount(count + 1)
    //     // alert(`Btn is clicked.....`);
    // }


    return <>
        <center>
            <h1>State : {count}</h1>

            <button className='btn btn-info' onClick={() => setCount(count + 1)}>Change Value</button>
        </center>
    </>
}

export default App