import { useReducer, useState } from "react";

function App() {
  // const [state, method] = useState(default value);
  // const [state, dispatch] = useReducer(reducer, initialValue);

  function reducer(state, action) {
    console.log(action);

    switch (action.type) {
      case "INC":
        return state + action.payload;
      case "DEC":
        return state - action.payload;
      default:
        return state;
    }
  }

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Use Reducer Hook</h1>

      <h2>Count : {count}</h2>

      <button onClick={() => dispatch({ type: "INC", payload: 1 })}>+</button>
      <button
        onClick={() => dispatch({ type: "DEC", payload: 1 })}
        style={{ marginLeft: "10px" }}
      >
        -
      </button>
    </>
  );
}

export default App;
