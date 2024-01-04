import React from 'react';
import "./css/login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {

        const targetPage = '/regist';

        navigate(targetPage);

    }

    return (
        <>  
            <div className="warpper">

                <div className="formular">

                <h2>Login</h2>

                <form action="/login" method="post">

                    <label className="innerForm" >Username</label>
                    <input name="username" className="innerForm" type="text" />

                    <label className="innerForm" >Password</label>
                    <input name="password" className="innerForm" type="password" />

                    <a href="" className="forget">Forget password?</a>

                    <button type="submit">Login</button>

                    <button onClick={handleButtonClick}>Regist</button>

                </form>

                </div>

            </div>
        </>
    );
}

export default Login;