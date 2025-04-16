import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            {/* Navigation */}
            <nav className="mt-4">
                <Link className="btn btn-primary me-2" to="/">Home</Link>
                <Link className="btn btn-success" to="/addProduct">Add Product</Link>
            </nav>
        </div>
    )
}
