import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <div>
            <center>
                <h1>Home Page</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.{name} Velit, saepe. Sit quis eos voluptatem iusto quaerat magnam debitis asperiores vero ducimus alias animi, nihil temporibus? Veniam rerum facilis cum sit!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, saepe. Sit quis eos voluptatem iusto quaerat magnam debitis asperiores vero ducimus alias animi, nihil temporibus? Veniam rerum facilis cum sit!</p>

                <button><Link to="/about" style={{ color: 'black', textDecoration: 'none' }}>Goto About Page</Link></button>

                <br />
                <br />

            </center>
        </div>
    )
}
