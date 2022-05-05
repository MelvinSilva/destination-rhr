import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Login = () => {
    const login = useRef();
    const password = useRef();
    const choiceStation = useNavigate()
    const [error, setError] = useState()
    const [passwordIsVisible, setPasswordIsVisible] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5001/users/login', { login: login.current.value, password: password.current.value })
            .then((res) => {
                choiceStation("choicestation") // useNavigate pour atteidre la page "choice station"

            }).catch((error) => {
                setError(error.response.data.error) // reponse de l'API
            });
    }



    return (
        <div className="auth">
            <div className="login">
                <div className="card-auth">
                    <form onSubmit={e => handleLogin(e)}>
                        <img src='/images/logo.png' alt='logo' />
                        <input type="text" placeholder='Numéro de CP*' ref={login} />
                        <input type={passwordIsVisible ? "text" : "password"} placeholder='Mot de passe*' ref={password}  />
                        <i className={passwordIsVisible ? "password-is-visible-login far fa-eye-slash" :  "password-is-visible-login fa fa-eye"} onClick={() => setPasswordIsVisible(!passwordIsVisible)}></i>
                        <p>Mot de passe oublié ?</p>
                        <button type="submit" className='btn-login'>SE CONNECTER</button>
                        <h3>{error}</h3>
                        <p className="line_horizontal">&nbsp; OU &nbsp;</p>
                    </form>
                    <Link className="link-login" to="register"><button className="btn">S'INSCRIRE</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;