import React from 'react';
import "./css/regist.css";
import { useNavigate } from 'react-router-dom';

const Regist = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {

        const targetPage = '/login';

        navigate(targetPage);

    }

    return (
        <>  
            <div className="warpper">

                <div className="formular">

                <h2>Regist</h2>

                <form action="login" method="post">

                    <label className="innerForm" >Firstname</label>
                    <input className="innerForm" type="text" />

                    <label className="innerForm" >Name</label>
                    <input className="innerForm" type="text" />

                    <label className="innerForm" >E-Mail</label>
                    <input className="innerForm" type="text" />

                    <label className="innerForm" >Username</label>
                    <input className="innerForm" type="text" />

                    <label className="innerForm" >Password</label>
                    <input className="innerForm" type="password" />

                    <label className="innerForm" >Repeat Password</label>
                    <input className="innerForm" type="password" />


                    <a href="" className="forget">Forget password?</a>

                    <button type="submit">Registrieren</button>

                    <button onClick={handleButtonClick}>Back to Login</button>

                </form>

                </div>

            </div>
        </>
    );
}

export default Regist;