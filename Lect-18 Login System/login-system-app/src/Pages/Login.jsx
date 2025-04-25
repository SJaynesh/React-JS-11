import { useEffect, useState } from 'react';
import { Link } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const Login = () => {

    const [loginForm, setLoginForm] = useState({ email: "", password: "" });
    const naviagate = useNavigate();

    useEffect(() => {
        const isLogin = JSON.parse(localStorage.getItem('login'));

        console.log(isLogin);

        if (isLogin == true) {
            naviagate('/dashBoard');
        }

    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Clicked....");

        if (loginForm.email && loginForm.password) {

            const users = JSON.parse(localStorage.getItem('users') || '[]');

            const loginUser = users.find((data) => data.email == loginForm.email);

            if (loginUser) {
                if (loginUser.password == loginForm.password) {
                    // toast.success('Login Successfully....😂');
                    localStorage.setItem('login', JSON.stringify(true));
                    naviagate('/dashBoard');
                } else {
                    toast.error(`Password is wrong...`);
                }
            } else {
                toast.error(`User not exits..Please registred now`);
            }

        } else {
            toast.warning("All Field are requried...");
        }

    }

    return <>
        <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center mt-5">

                <div className="card pt-2" style={{ width: '30rem' }}>
                    <h1 align='center'>Login Page</h1>
                    {/* <img src="https://png.pngtree.com/png-vector/20190919/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1742031.jpg" height={200} width={50} className="card-img-top" alt="..." /> */}


                    <div className="mb-3 mx-2">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={loginForm.email} onChange={(event) => setLoginForm({ ...loginForm, email: event.target.value })} placeholder="Enter email" />
                    </div>

                    <div className="mb-3 mx-2">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={loginForm.password} onChange={(event) => setLoginForm({ ...loginForm, password: event.target.value })} placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-outline-success mx-2 mb-4">Login</button>


                    <p>New User ? <Link to="/register">Register</Link></p>

                </div>

                <ToastContainer />
            </div>
        </form>
    </>
}

export default Login;