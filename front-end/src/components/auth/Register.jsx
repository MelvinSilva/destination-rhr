import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const login = useRef();
    const password = useRef();
    const lastname = useRef();
    const firstname = useRef();
    const email = useRef();
    const confirmPassword = useRef();


    const [error, setError] = useState()

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
                    alert('Your profil is created')
                }).catch((error) => {
                    setError(error.response.data.error) // reponse de l'API
                    console.log(error.response.data.error)
                });

        }
        else alert("Your password is different")

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
                        <input type="password" placeholder='Mot de passe*' ref={password} required />
                        <h5>{error}</h5>
                        <input type="password" placeholder='Confirmation mot de passe*' ref={confirmPassword} required />
                        <Link className="link-register" to="/"><button className='btn' type="submit">VALIDER L'INSCRIPTION</button></Link>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Register;