import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const login = useRef();
    const password = useRef();
    const lastname = useRef();
    const firstname = useRef();
    const email = useRef();
    const confirmPassword = useRef();

    const returnLogin = useNavigate()
    
    const [error, setError] = useState()
    const [passwordIsVisible, setPasswordIsVisible] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault()
        if (confirmPassword.current.value === password.current.value) {

            axios.post('http://localhost:5001/users/register', {
                login: login.current.value,
                password: password.current.value,
                firstname: firstname.current.value,
                lastname: lastname.current.value,
                email: email.current.value,

            })
                .then((res) => {
                    alert('Votre inscription est bien prise en compte')
                    returnLogin("/")

                }).catch((error) => {
                    setError(error.response.data.error) // reponse de l'API
                    console.log(error.response.data.error)
                });

        }
        else alert("Votre mot de passe est différent")
    }

    return (
        <div className="auth">
            <div className="register">
                <video id="background-video" autoPlay loop muted>
                    <source src="./images/production ID_4789847.mp4" type="video/mp4" />
                </video>
                <div className="card-auth">
                    <form onSubmit={e => handleRegister(e)}>
                        <input type="text" placeholder='Numéro de CP*' ref={login} minlength="1" maxlength="8" required />
                        <input type="text" placeholder='Nom*' ref={lastname} required />
                        <input type="text" placeholder='Prénom*' ref={firstname} required />
                        <input type="email" placeholder='Email*' ref={email} required />
                        <input type={passwordIsVisible ? "text" : "password"} placeholder='Mot de passe*' ref={password} required />
                        <i className={passwordIsVisible ? "password-is-visible-register far fa-eye-slash" :  "password-is-visible-register fa fa-eye"} onClick={() => setPasswordIsVisible(!passwordIsVisible)}></i>
                        <h5>{error}</h5>
                        <input type={passwordIsVisible ? "text" : "password"} placeholder='Confirmation mot de passe*' ref={confirmPassword} required />
                        <button className='btn' type="submit">VALIDER L'INSCRIPTION</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;