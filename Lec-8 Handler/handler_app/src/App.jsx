import React, { useRef } from 'react'

export default function App() {
  let fruits = ["Apple", "Mango", "Banana", "Kiwi"]
  let users = [
    {
      name: "Rahul",
      age: 20,
      course: "Full Stack"
    },
    {
      name: "Aman",
      age: 19,
      course: "UI/UX"
    },
    {
      name: "Karan",
      age: 22,
      course: "Flutter"
    },
    {
      name: "Rajavi",
      age: 19,
      course: "Full Stack"
    }
  ];

  const inputRef = useRef(null);

  console.log(inputRef);

  function getValue() {
    console.log("Button is clicked....");
    inputRef.current.focus();

    const data = inputRef.current.value;
    console.log("Value", data);
  }

  function setValue() {
    inputRef.current.focus();
    inputRef.current.value = "Jaynesh Sarkar";
  }

  function setColor() {
    inputRef.current.style.color = "red";
  }

  function hideField() {
    inputRef.current.style.display = "none";
  }


  return (
    <>
      <center>
        <h1>useRef Hook</h1>

        <input type="text" ref={inputRef} placeholder='Enter any here..' />
        <button onClick={getValue}>Click</button>
        <button onClick={setValue}>Set Value</button>
        <button onClick={setColor}>Apply Color</button>
        <button onClick={hideField}>Hide 🔒</button>
      </center>
    </>
  )
}
