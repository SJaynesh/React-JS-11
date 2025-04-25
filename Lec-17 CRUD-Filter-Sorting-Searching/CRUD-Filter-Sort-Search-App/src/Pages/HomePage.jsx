import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {

    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')));

    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        console.log("Use Effect Hook....", products);

        // Products Searching
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

        // Product Price Sorting
        if (sort == 'lth') {
            const updatedProduct = products.slice().sort((a, b) => parseFloat(a.p_price) - parseFloat(b.p_price));

            setProducts(updatedProduct);
        } else if (sort == 'htl') {
            const updatedProduct = products.slice().sort((a, b) => parseFloat(b.p_price) - parseFloat(a.p_price));

            setProducts(updatedProduct);
        }

        // Products Status

        if (status != "") {

            let allProducts = JSON.parse(localStorage.getItem('products'));

            const updateProducts = allProducts.filter((item) => item.active == status);

            setProducts(updateProducts);
        }
    }, [search, sort, status])

    const handleToggleBtn = (index, active) => {
        console.log(`Index : ${index} Status : ${active}`);

        let updatedProduct = [];
        let allProducts = JSON.parse(localStorage.getItem('products'));


        if (active == 'decative') {
            updatedProduct = allProducts.map((item, i) => {
                if (index == i) {
                    item.active = "active";
                }
                return item;
            })
        } else if (active == 'active') {
            updatedProduct = allProducts.map((item, i) => {
                if (index == i) {
                    item.active = "decative";
                }
                return item;
            })
        }

        localStorage.setItem('products', JSON.stringify(updatedProduct));

        setProducts(updatedProduct);

        setStatus("")

    }

    const handleDelete = (index) => {
        let allProduct = JSON.parse(localStorage.getItem('products'));

        const deletedProdcuts = allProduct.filter((_, i) => i != index)

        localStorage.setItem('products', JSON.stringify(deletedProdcuts));

        setProducts(deletedProdcuts);
    }

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

            <div className='col-4 mt-2'>
                <label htmlFor="">Status : </label>
                <select value={status} onChange={(event) => setStatus(event.target.value)}>
                    <option value="">Select</option>
                    <option value="active">Active</option>
                    <option value="decative">Deactive</option>
                </select>
            </div>

            {/* <h1>{search}</h1> */}

            {/* Product Check */}
            {
                products == null ? (
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

                                        <button className={(data.active == 'active') ? 'btn btn-success' : 'btn btn-danger'} onClick={() => handleToggleBtn(index, data.active)}>{data.active}</button>

                                        <button className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button>

                                        {/* {data.active == 'decative' ? <button className='btn btn-danger'>{data.active}</button> : <button className='btn btn-success'>{data.active}</button>} */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        </div >
    )
}
