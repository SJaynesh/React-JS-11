import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function AddProductPage() {
    const [product, setProducts] = useState({ p_name: "", p_price: "", p_desc: "", p_image: "", active: "decative" });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = JSON.parse(localStorage.getItem('products')) ?? []; // data = null == []

        console.log(data);

        data.push(product);

        localStorage.setItem('products', JSON.stringify(data));// String

        setProducts({ p_name: "", p_price: "", p_desc: "", p_image: "" });

        navigate('/');
    }

    return (
        <div className="container my-5">

            {/* Title */}
            <h2 className="text-center mb-4">Add Product Page</h2>

            {/* Form */}
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
                        <div className="mb-3">
                            <label className="form-label">Product Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={product.p_name}
                                onChange={(e) => setProducts({ ...product, p_name: e.target.value })}
                                placeholder="Enter product name"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Product Price</label>
                            <input
                                type="number"
                                className="form-control"
                                value={product.p_price}
                                onChange={(e) => setProducts({ ...product, p_price: e.target.value })}
                                placeholder="Enter product price"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Product Description</label>
                            <textarea
                                className="form-control"
                                value={product.p_desc}
                                onChange={(e) => setProducts({ ...product, p_desc: e.target.value })}
                                placeholder="Enter product description"
                                rows="3"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Product Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                value={product.p_image}
                                onChange={(e) => setProducts({ ...product, p_image: e.target.value })}
                                placeholder="Enter product image URL"
                                required
                            />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-outline-success">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
