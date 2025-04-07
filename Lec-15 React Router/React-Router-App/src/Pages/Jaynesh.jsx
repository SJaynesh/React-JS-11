import React from 'react'
import { Link } from 'react-router-dom'

export default function Jaynesh() {
    return (
        <div>
            <center>
                <h1>👋 Hi there! I'm Jaynesh Sarkar 😊</h1>

                <p>I'm a passionate Application Developer and Full Stack Developer 💻, currently working as a Trainer at Red & White Skill Education 🎓. I specialize in creating high-quality, innovative solutions and applications. I hold a BCA degree from VNSGU 🎓, which has helped me build a strong foundation in both technical and soft skills.</p>

                <button style={{ backgroundColor: 'green' }}><Link to="/" style={{ color: "white", textDecoration: 'none' }}>Goto HOME</Link></button>
            </center>
        </div>
    )
}
