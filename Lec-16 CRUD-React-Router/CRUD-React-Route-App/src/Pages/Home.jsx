import React from 'react'
import NavBar from '../Components/NavBar'
import { Table, Button } from 'react-bootstrap';

export default function Home() {
    return (
        <div>
            <NavBar />
            <h1 align='center' className='mt-5'>View Users</h1>

            <div className='d-flex justify-content-center mt-5'>
                <div className='col-6'>
                    <Table striped bordered hover>
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
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>mark@gmail.com</td>
                                <td>12345</td>
                                <td>
                                    <Button variant="outline-warning">Edit</Button>
                                    <Button variant="outline-danger" className='ms-2'>Delete</Button></td>

                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
