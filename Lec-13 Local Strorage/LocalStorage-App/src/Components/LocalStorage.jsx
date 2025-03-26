import React, { useEffect, useState } from 'react'

export default function LocalStorage() {
    const [name, setName] = useState();
    const [age, setAge] = useState();

    const [localName, setLocalName] = useState("");
    const [localAge, setLocalAge] = useState("");

    const getLocalData = () => {
        let localName = localStorage.getItem('name');
        let localAge = localStorage.getItem('age');

        console.log(localName);
        console.log(localAge);


        setLocalName(localName);
        setLocalAge(localAge);

    }


    useEffect(() => {
        getLocalData();
    }, [])

    const handleStoreData = () => {
        if (name && age) {
            localStorage.setItem('name', name);
            localStorage.setItem('age', age);
            alert("Name and Age stored...");
            getLocalData();
        } else {
            alert('Please enter name and age');
        }
    }

    const deleteLocalData = (key) => {
        localStorage.removeItem(key)

        getLocalData();
    }

    const deleteAllLocalData = () => {
        localStorage.clear();

        getLocalData();
    }

    return (
        <div>
            <h1>Local Storage</h1>

            <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder='Enter name...' />
            &nbsp;
            <input type="number" value={age} onChange={(event) => setAge(event.target.value)} placeholder='Enter age...' />
            &nbsp;
            <button onClick={handleStoreData}>Add</button>


            <br />
            <br />
            <br />

            {localName && <p>Name : {localName}  <button onClick={() => deleteLocalData('name')}>❌</button></p>}
            {localAge && <p>Age  : {localAge}  <button onClick={() => deleteLocalData('age')}>❌</button></p>}

            {localAge || localName && <button onClick={deleteAllLocalData}>Delete All Data</button>}
        </div>
    )
}
