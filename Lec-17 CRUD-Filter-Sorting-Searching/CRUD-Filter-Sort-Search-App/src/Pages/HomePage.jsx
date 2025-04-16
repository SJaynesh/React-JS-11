import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {

    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) ?? []);

    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() => {

        console.log("Use Effect Hook....");

        if (search != '') {
            console.log("Searching....");

            // iPhone == iphone   
            // HeadPhone == headphone

            //IPHONE == iphone
            //headPhone == headphone
            const updateProducts = products.filter((item) => item.p_name.toLowerCase().includes(search.toLowerCase()));

            setProducts(updateProducts);
        } else {
            setProducts(JSON.parse(localStorage.getItem('products')));
        }

        if (sort == 'lth') {
            const updatedProduct = products.slice().sort((a, b) => parseFloat(a.p_price) - parseFloat(b.p_price));

            setProducts(updatedProduct);
        } else if (sort == 'htl') {
            const updatedProduct = products.slice().sort((a, b) => parseFloat(b.p_price) - parseFloat(a.p_price));

            setProducts(updatedProduct);
        }
    }, [search, sort])

    return (
        <div className="container my-5">
            {/* Title */}
            <h1 className="text-center mb-4">Home Page</h1>


            <div className='col-4'>
                <input
                    type="search"
                    className="form-control"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search"
                    required
                />
            </div>

            <div className='col-4 mt-2'>
                <label htmlFor="">Price : </label>
                <select value={sort} onChange={(event) => setSort(event.target.value)}>
                    <option value="">Select</option>
                    <option value="htl">High To Low</option>
                    <option value="lth">Low To High</option>
                </select>
            </div>

            {/* <h1>{search}</h1> */}

            {/* Product Check */}
            {
                products.length === 0 ? (
                    <div className="text-center">
                        <h2 className="text-danger">No Products Available</h2>
                    </div>
                ) : (
                    <div className="row g-4 mt-5">
                        {products.map((data, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card h-100 shadow-sm">
                                    <img src={data.p_image} className="card-img-top" alt={data.p_name} style={{ height: "250px", objectFit: "contain" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.p_name}</h5>
                                        <p className="card-text">{data.p_desc}</p>
                                    </div>
                                    <div className="card-footer bg-white border-top-0">
                                        <h4 className="text-success">₹ {data.p_price}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}
