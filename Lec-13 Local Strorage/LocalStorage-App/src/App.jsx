import LocalStorage from "./Components/LocalStorage"
import SessionStorage from "./Components/SessionStorage"

export default function App() {
  return (
    <div>
      <LocalStorage />
      <br />
      <hr />
      <SessionStorage />
    </div>
  )
}

