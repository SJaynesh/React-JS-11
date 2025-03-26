import React, { useState } from 'react'

export default function SessionStorage() {

    const [emp_name, setEmpName] = useState("");
    const handleAddEMPData = () => {
        sessionStorage.setItem('emp_name', emp_name);
    }

    const deleteEMPData = (key) => {
        sessionStorage.removeItem(key);
    }
    return (
        <div>
            <h1>Session Storage</h1>

            <input type="text" value={emp_name} onChange={(event) => setEmpName(event.target.value)} placeholder='Enter employee name' /> &nbsp;

            <button onClick={handleAddEMPData}>ADD EMP</button>

            <br />
            <br />
            <br />

            <p>EMP NAME : {sessionStorage.getItem('emp_name')}  <button onClick={() => deleteEMPData('emp_name')}>✖</button></p>

        </div>
    )
}
