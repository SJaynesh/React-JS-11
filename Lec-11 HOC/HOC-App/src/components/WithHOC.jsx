import { useState } from "react";
// Higher Order Components => Parameters Components => return Components
const WithHOC = (Component, increaseVal) => {
    return () => {
        const [count, setCount] = useState(1);
        return <Component count={count} increase={() => setCount(count * increaseVal)} />
    }
}

export default WithHOC;