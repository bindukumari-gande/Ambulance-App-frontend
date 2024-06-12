import React, { useState } from 'react';
import './Login.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log("email:", email);
        console.log("password:", password);
    };

    return (
        <form onSubmit={handleSubmit}> {/* Added onSubmit handler */}
            <h1 id="demo1">Login Form</h1>

            <div className="login">
                <div className="w-25 ">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }}
                        placeholder="Enter Email" />
                </div>

                <div className="w-25 ">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }}
                        placeholder="Enter Password" />
                </div>
                <br />

                <div className="btn1">
                    <button type="submit" className="btn btn-primary ms-auto">Login</button>
                </div>
            </div>
        </form>
    )
}
export default Login;
