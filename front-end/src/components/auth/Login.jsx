import axios from 'axios';
import React, { useRef, useState } from 'react';

const Login = () => {
    const login = useRef();
    const password = useRef();
    const [error, setError]= useState()

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
        <div className="login">
            <video id="background-video" autoPlay loop muted>
                <source src="./images/production ID_4789847.mp4" type="video/mp4" />
            </video>
            <div className="card-login">
                <img src='./images/logo.png' alt='logo' />
                <form onSubmit={e => handleLogin(e)}>
                    <input type="text" placeholder='Numéro de CP*' ref={login} />
                    <input type="password" placeholder='Mot de passe*' ref={password} />
                    <p>Mot de passe oublié ?</p>
                    <button type="submit" className='btn-login'>SE CONNECTER</button>
                    <h3>{error}</h3>
                    <span> ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ OU ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</span>
                    <button className='btn-register'>S'INSCRIRE</button>
                </form>
            </div>



        </div>
    );
};

export default Login;