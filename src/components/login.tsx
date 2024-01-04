import React, { FormEvent, useState } from 'react';
import "./css/login.css";
import { useNavigate } from 'react-router-dom';

interface FormData {
    userName: string;
    password: string
}

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState<FormData>({
        userName: '',
        password: '',
    });

    const [userId, setUserId] = useState<number | null>(null);
    const [loginError, setLoginError] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const fetchUserId = async () => {
        try {

            const response = await fetch('http://localhost:3000/getUserId', {
            // Annahme: Sie haben einen Endpunkt zum Abrufen der Benutzer-ID implementiert
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                },
            });
        
            if(response.ok) {

                const responseData = await response.json();
                const userId = responseData.userId;
                setUserId(userId);

            } else {

                console.error('Fehler beim Abrufen der Benutzer-ID', response.statusText);
                setLoginError(true);

            }

        } catch (error) {
            console.error('Fehler beim Abrufen der Benutzer-ID:', error);
            setLoginError(true);
        }

    }


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await fetchUserId();

        try {
            const response = await fetch('http://localhost:3000/loginErfolgreich', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...formData, userId}),
            });

            if(response.ok) {
                const responseData = await response.json();
                const userId = responseData.userId;
                console.log('Benutzer erfolgreich eingeloggt!');
                navigate('/loginErfolgreich', { state: { userId: userId, userName: formData.userName} });

            } else {

                console.error('Fehler beim Einloggen', response.statusText);
                setLoginError(true);

            }
        } catch (error) {

            console.error('Fehler beim Einloggen:', error);
            setLoginError(true);

        }
    }; 

    const handleButtonClick = () => {

        navigate('/regist');

    }

    return (
        <>  
            <div className="warpper">

                <div className="formular">

                <h2>Login</h2>

                <form onSubmit={handleSubmit}>

                    <label className="innerForm" >Username</label>
                    <input
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleInputChange}
                        className="innerForm" />

                    <label className="innerForm" >Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="innerForm" />

                    <a href="" className="forget">Forget password?</a>

                    {loginError && <p>Login fehlgeschlagen!</p>}

                    <button type="submit">Login</button>

                    <button onClick={handleButtonClick}>Regist</button>

                </form>

                </div>

            </div>
        </>
    );
}

export default Login;