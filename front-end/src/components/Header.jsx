import axios from 'axios';
import React, { useContext, useState } from 'react';

import { decodeToken } from 'react-jwt';
import AuthTokenContext from './context/AuthTokenContext';

function Header() {
  const [errorConnect, setErrorConnect] = useState();
  const { setUser } = useContext(AuthTokenContext);

  const handleLogOut = (e) => {
    e.preventDefault();
    axios.get('http://localhost:5001/users/logout', { withCredentials: true })
      .then((res) => {
        setUser(decodeToken(res.data));
      }).catch((error) => {
        setErrorConnect(error.response.data.error); // reponse de l'API
      });
  };

  return (
    <div className="header">
      <a onClick={handleLogOut} href="/"><h1>Déconnecter</h1></a>
      <a href="/"><img className="logo" src="/images/logo.png" alt="logo" /></a>
      <div className="title-board">
        <span className="letter letter-D" />
        <span className="letter letter-E" />
        <span className="letter letter-S" />
        <span className="letter letter-T" />
        <span className="letter letter-I" />
        <span className="letter letter-N" />
        <span className="letter letter-A" />
        <span className="letter letter-T" />
        <span className="letter letter-I" />
        <span className="letter letter-O" />
        <span className="letter letter-N" />
        <span className="letter letter-blank" />
        <span className="letter letter-R" />
        <span className="letter letter-H" />
        <span className="letter letter-R" />
      </div>
      <img className="logo-sncf" src="/images/logosncf.png" alt="logo-sncf" />
      {errorConnect && <h3>{errorConnect}</h3>}
    </div>
  );
}

export default Header;
