/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';
import { RiAdminFill, RiLogoutBoxFill } from 'react-icons/ri';

function Footer() {
  const [errorConnect, setErrorConnect] = useState();

  const refreshPage = () => { // actualisation automatique de la page
    window.location.reload();
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    axios.get('http://localhost:5001/users/logout', { withCredentials: true })
      .then((res) => {
        refreshPage();
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
        <div className="logout-admin">
          <a className="link-logout" onClick={handleLogOut} href="/" alt="logout">
            <RiLogoutBoxFill />
            {' '}
            Déconnexion
          </a>
          <a className="link-admin" href="/administration">
            <RiAdminFill />
            {' '}
            Administration
          </a>
        </div>
        <p className="text-dedication">
          Destination RHR by Jean-Mi, Fred, Steph & Melvin
          {' '}
          <br />
          @Wild Code School
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
