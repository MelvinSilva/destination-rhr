import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import AuthTokenContext from '../context/AuthTokenContext';

function Login() {
  const login = useRef();
  const password = useRef();
  const choiceStation = useNavigate();
  const [errorConnect, setErrorConnect] = useState();
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const { setUser } = useContext(AuthTokenContext);

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5001/users/login', { login: login.current.value, password: password.current.value }, { withCredentials: true })
      .then((res) => {
        setUser(decodeToken(res.data));
        choiceStation('choice-station'); // useNavigate pour atteindre la page "choice station"
      }).catch((error) => {
        setErrorConnect(error.response.data.error); // reponse de l'API
      });
  };

  return (
    <div className="auth">
      <div className="login">
        <div className="card-auth">
          <form onSubmit={(e) => handleLogin(e)}>
            <img src="/images/logo.png" alt="logo" />
            <input type="text" placeholder="Numéro de CP*" ref={login} />
            <input type={passwordIsVisible ? 'text' : 'password'} placeholder="Mot de passe*" ref={password} />
            {/* mise en place du i pour icone */}
            <i className={passwordIsVisible ? 'password-is-visible-login far fa-eye-slash' : 'password-is-visible-login fa fa-eye'} onClick={() => setPasswordIsVisible(!passwordIsVisible)} onKeyPress="icon" role="button" tabIndex={0} label htmlFor="password-visible" />
            <button type="submit" className="btn-login">SE CONNECTER</button>
            <h3>{errorConnect}</h3>
            <p className="line_horizontal">&nbsp; OU &nbsp;</p>
          </form>
          <Link className="link-login" to="register"><button type="button" className="btn">S&apos;INSCRIRE</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
