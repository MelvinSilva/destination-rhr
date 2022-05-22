/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';
import { RiAdminFill } from 'react-icons/ri';
import { BiLogOut } from 'react-icons/bi';

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
        <p className="link-logout">
          <a onClick={handleLogOut} href="/" alt="logout">
            <BiLogOut />
            {' '}
            Se déconnecter
          </a>
        </p>
        <a href="/administration">
          <p className="link-admin">
            <RiAdminFill />
            {' '}
            Espace administration
          </p>
        </a>
        <p className="text-dedication">Destination RHR by Jean-Mi, Fred, Steph & Melvin @Wild Code School</p>
      </div>
      <div className="logo-footer-right">
        <a href="https://www.sncf-connect.com/"><img className="logo" src="/images/footer/connect.jpg" alt="logo-connect" /></a>
        <a href="https://wit.sncf.fr/"><img className="logo" src="/images/footer/wit.jpg" alt="logo-wit" /></a>
      </div>
    </div>
  );
}

export default Footer;
