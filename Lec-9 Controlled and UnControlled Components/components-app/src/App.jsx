import React, { useState, useRef } from "react";
const App = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState();

  const empNameRef = useRef(null);

  function handleName(e) {
    console.log(e.target.name);
    if (e.target.name == 'name') {
      setName(e.target.value);
    } else {
      setAge(e.target.value);
    }
  }

  // function handleAge(e) {
  //   setAge(e.target.value);
  // }

  function getEMPData() {
    // let name = document.getElementById('emp_name').value;
    // console.log(name);

    // document.getElementById('ename').innerHTML = name;

    console.log(empNameRef.current.value);


  }

  return (
    <>
      <h1>Controlled Components </h1>

      <form >
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label htmlFor="">Age</label>
        <input type="number" name="age" value={age} onChange={handleName} />

        <h2>Name : {name}</h2>
        <h2>Age : {age}</h2>
      </form>


      <h1>UnControlled Components </h1>

      <form>
        <label htmlFor="">EMP Name</label>
        <input type="text" ref={empNameRef} id="emp_name" />

        <button onClick={getEMPData}>Submit</button>
      </form>

      <h2 id="ename"></h2>
    </>
  );

}

export default App;