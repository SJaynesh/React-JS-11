import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

export default function DashBoard() {

    const naviagate = useNavigate();

    useEffect(() => {
        const isLogin = JSON.parse(localStorage.getItem('login'));

        console.log(isLogin);

        if (isLogin == null) {
            naviagate('/');
        } else {
            toast.success("Login Successfully.....");
        }

    }, [])

    const handleLogOut = () => {
        localStorage.removeItem('login');

        naviagate('/');
    }
    return (
        <div>
            <h1>DashBoard</h1>

            <button className='btn btn-info' onClick={handleLogOut}>Log Out</button>

            <ToastContainer />
        </div>
    )
}
