import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { data, useNavigate } from 'react-router-dom';


export default function Home() {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('users')) ?? [];

        console.log(data);


        setUsers(data);
    }, [])

    const deleteUser = (index) => {
        const deletedUsers = users.filter((_, i) => index != i)

        localStorage.setItem('users', JSON.stringify(deletedUsers));

        setUsers(deletedUsers);
    }
    return (
        <div>
            <h1 align='center' className='mt-5'>View Users</h1>

            <div className='d-flex justify-content-center mt-5'>
                <div className='col-6'>
                    {users.length == 0 ? <div>
                        <center>
                            <h5>No Any Records </h5>
                        </center>
                    </div> : <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((data, index) => (

                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{data.username}</td>
                                        <td>{data.email}</td>
                                        <td>{data.password}</td>
                                        <td>
                                            <Button variant="outline-warning" onClick={() => navigate('/editUser', { state: { ...data, 'index': index } })}>Edit</Button>
                                            <Button variant="outline-danger" className='ms-2' onClick={() => deleteUser(index)}>Delete</Button></td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>}
                </div>
            </div>
        </div>
    )
}
