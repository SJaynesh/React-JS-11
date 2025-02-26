import First from "./First"
import './Users.css'

let name = "Mantra Kumar";
let age = 35;

function Users() {
    return <>

        <img src="https://avatars.githubusercontent.com/u/115562979?v=4" />

        <div className="hello">
            <h1> Hello {name}</h1>
            <p>Hello I am {(false) ? name : "Hey"}. I am also {age} year's.</p>
        </div>

        <div>
            <h2>Hello I am Jaynesh</h2>
        </div>

        {/*  second Conponent */}
        <First />
    </>
}

export default Users