import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';



const Login = () => {
    const login = useRef();
    const password = useRef();
    const [error, setError] = useState()

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5001/users/login', { login: login.current.value, password: password.current.value })
            .then((res) => {
                alert('Vous etes connecté')
            }).catch((error) => {
                setError(error.response.data.error) // reponse de l'API
            });
    }

    return (
        <div className="auth">
            <div className="login">
                <div className="card-auth">
                    <form onSubmit={e => handleLogin(e)}>
                        <img src='./images/logo.png' alt='logo' />
                        <input type="text" placeholder='Numéro de CP*' ref={login} />
                        <input type="password" placeholder='Mot de passe*' ref={password} />
                        <p>Mot de passe oublié ?</p>
                        <button type="submit" className='btn-login'>SE CONNECTER</button>
                        <h3>{error}</h3>
                        <p className="line_horizontal">&nbsp; OU &nbsp;</p>
                    </form>
                    <Link className="link" to="register"><button className="btn">S'INSCRIRE</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;