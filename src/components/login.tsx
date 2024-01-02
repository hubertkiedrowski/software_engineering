import React from 'react';
import "./css/login.css";
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <>  
            <div className="warpper">

                <div className="formular">

                <h2>Login</h2>

                <form action="login" method="post">

                    <label className="innerForm" >Username</label>
                    <input className="innerForm" type="text" />

                    <label className="innerForm" >Password</label>
                    <input className="innerForm" type="password" />

                    <a href="" className="forget">Forget password?</a>

                    <button type="submit">Login</button>

                    <a href="/regist">
                        <button >Regist</button>
                    </a>

                </form>

                </div>

            </div>
        </>
    );
}

export default Login;