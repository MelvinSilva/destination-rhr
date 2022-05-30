/* eslint-disable no-alert */
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const login = useRef();
  const password = useRef();
  const lastname = useRef();
  const firstname = useRef();
  const email = useRef();
  const confirmPassword = useRef();

  const returnLogin = useNavigate();

  const [errorPassword, setErrorPassword] = useState();
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (confirmPassword.current.value === password.current.value) {
      axios.post('http://localhost:5001/users/register', {
        cp_number: login.current.value,
        password: password.current.value,
        firstname: firstname.current.value,
        lastname: lastname.current.value,
        email: email.current.value,

      })
        .then(() => {
          alert('Votre inscription à bien été prise en compte, vous pouvez maintenant vous connectez 😁');
          returnLogin('/');
        }).catch((error) => {
          setErrorPassword(error.response.data.error); // reponse de l'API
        });
    } else alert('Votre mot de passe est différent');
  };

  return (
    <div className="auth">
      <div className="register">
        <video id="background-video" autoPlay loop muted>
          <source src="./images/production ID_4789847.mp4" type="video/mp4" />
        </video>
        <div className="card-auth">
          <form onSubmit={(e) => handleRegister(e)}>
            <input type="text" placeholder="Numéro de CP*" ref={login} minLength="1" maxLength="8" required />
            <input type="text" placeholder="Nom*" ref={lastname} required />
            <input type="text" placeholder="Prénom*" ref={firstname} required />
            <input type="email" placeholder="Email*" ref={email} required />
            <input type={passwordIsVisible ? 'text' : 'password'} placeholder="Mot de passe*" ref={password} required />
            <i className={passwordIsVisible ? 'password-is-visible-register far fa-eye-slash' : 'password-is-visible-register fa fa-eye'} onClick={() => setPasswordIsVisible(!passwordIsVisible)} onKeyPress="icon" role="button" tabIndex={0} label htmlFor="password-visible" />
            <h5>{errorPassword}</h5>
            <input type={passwordIsVisible ? 'text' : 'password'} placeholder="Confirmation mot de passe*" ref={confirmPassword} required />
            <button className="btn" type="submit">VALIDER L&apos;INSCRIPTION</button>
            <Link to="/"><button className="btn-return-home" type="button">RETOUR ACCUEIL</button></Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
