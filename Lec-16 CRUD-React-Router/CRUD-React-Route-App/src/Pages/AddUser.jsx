import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {
    const [form, setForm] = useState({ username: "", email: "", password: "", })

    const navigate = useNavigate();

    const handleAddUser = (e) => {
        e.preventDefault();

        let data = JSON.parse(localStorage.getItem('users')) ?? [];

        console.log(data);

        data.push(form);

        localStorage.setItem('users', JSON.stringify(data));

        setForm({ username: "", email: "", password: "" })


        navigate('/')

    }
    return (
        <div>
            <h1 align='center' className='mt-5'>Add User</h1>

            <div className='d-flex justify-content-center mt-5'>
                <div className='col-4'>
                    <Form onSubmit={handleAddUser}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" value={form.username} onChange={(event) => setForm({ ...form, username: event.target.value })
                            } placeholder="Enter your username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} placeholder="Enter your password" />
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>


                    {/* <h1>UserName : {form.username}</h1> */}
                </div>
            </div>

        </div>
    )
}
