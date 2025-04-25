import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {

    const [registerForm, setRegisterForm] = useState({ username: "", email: "", password: "" });
    const navigate = useNavigate();

    useEffect(() => {
        const isLogin = JSON.parse(localStorage.getItem('login'));

        console.log(isLogin);

        if (isLogin == true) {
            navigate('/dashBoard');
        }

    }, [])

    const handleRegister = (event) => {
        event.preventDefault();

        if (registerForm.username && registerForm.email && registerForm.password) {
            let data = JSON.parse(localStorage.getItem('users') || '[]');

            const isValid = data.find((user) => user.email == registerForm.email);

            console.log(isValid);

            if (isValid) {
                toast.info(`${registerForm.email} is allready registed...`);
                console.log("Your are allready registerd....");
            } else {
                data.push(registerForm);

                localStorage.setItem('users', JSON.stringify(data));

                toast.success(`${registerForm.email} is registed successfully...`);

                setRegisterForm({ username: "", email: "", password: "" });

                // navigate('/');
            }
        } else {
            toast.error("All Field are required...");
        }
    }

    return <>
        <form onSubmit={handleRegister}>
            <div className="d-flex justify-content-center mt-5">

                <div className="card pt-2" style={{ width: '30rem' }}>
                    <h1 align='center'>Register Page</h1>
                    {/* <img src="https://png.pngtree.com/png-vector/20190919/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1742031.jpg" height={200} width={50} className="card-img-top" alt="..." /> */}



                    <div className="mb-3 mx-2">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" value={registerForm.username} onChange={(event) => setRegisterForm({ ...registerForm, username: event.target.value })} placeholder="Enter username" />
                    </div>
                    <div className="mb-3 mx-2">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={registerForm.email} onChange={(event) => setRegisterForm({ ...registerForm, email: event.target.value })} placeholder="Enter email" />
                    </div>

                    <div className="mb-3 mx-2">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={registerForm.password} onChange={(event) => setRegisterForm({ ...registerForm, password: event.target.value })} placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-outline-success mx-2 mb-4">Register</button>

                    <ToastContainer />



                    <p>Alread have User ? <Link to="/">Login</Link></p>

                </div>
            </div >

        </form >
    </>
}

export default Register;