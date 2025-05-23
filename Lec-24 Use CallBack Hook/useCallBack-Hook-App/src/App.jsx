// Use Memo Hook

import { useCallback, useState } from "react";
import NavBar from "./Components/NavBar";

// import { useMemo, useState } from "react";

// const numberArray = [];

// for (let i = 1; i < 20000000; i++) {
//   numberArray.push(i);
// }

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [number, setNumber] = useState(numberArray);

//   const finalNumber = useMemo(() => number.filter((num) => num == 1234567), []);
//   return (
//     <>
//       <div style={{ textAlign: "center" }}>
//         <h1>UseMemo Hook</h1>

//         <h2> {finalNumber} </h2>
//         <h2>{count}</h2>

//         <button onClick={() => setCount(count + 1)}>+</button>
//       </div>
//     </>
//   );
// };

// export default App;

// Use CallBack Hook
const App = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  // const myMethod = () => {
  //   return "Hello World....";
  // };

  const myMethod = useCallback(() => {
    return "Hello World" + number;
  }, [number]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>useCallBack Hook</h1>

        <h2>Count : {count}</h2>
        <h2>Number : {number}</h2>

        <NavBar name={"Harsh"} myMethod={myMethod} />

        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setNumber(number + 1)}>+ Number</button>
      </div>
    </>
  );
};

export default App;
