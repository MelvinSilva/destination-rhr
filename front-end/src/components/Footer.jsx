/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { RiAdminFill } from 'react-icons/ri';
import { BiLogOut } from 'react-icons/bi';
import { decodeToken } from 'react-jwt';
import AuthTokenContext from './context/AuthTokenContext';

function Footer() {
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
    <div className="footer">
      <div className="logo-footer-left">
        <a href="https://graou.info/apropos"><img className="logo" src="/images/footer/graou.jpg" alt="logo-graou" /></a>
        <a href="https://www.orfea.fr/fr"><img className="logo" src="/images/footer/orfea.jpg" alt="logo-orfea" /></a>
      </div>
      <div className="infos-footer">
        <p className="text-dedication">Destination RHR by Jean-Mi, Fred, Steph & Melvin @Wild Code School</p>
        <a href="/administration">
          <p className="link-admin">
            <RiAdminFill />
            {' '}
            Espace administration
          </p>
        </a>
        <p className="link-logout">
          <a onClick={handleLogOut} href="/" alt="logout">
            <BiLogOut />
            {' '}
            Se déconnecter
          </a>
        </p>
      </div>
      <div className="logo-footer-right">
        <a href="https://www.sncf-connect.com/"><img className="logo" src="/images/footer/connect.jpg" alt="logo-connect" /></a>
        <a href="https://wit.sncf.fr/"><img className="logo" src="/images/footer/wit.jpg" alt="logo-wit" /></a>
      </div>
    </div>
  );
}

export default Footer;
