import React from 'react';
import { RiAdminFill } from 'react-icons/ri';

function Footer() {
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
            espace administration
          </p>
        </a>
      </div>
      <div className="logo-footer-right">
        <a href="https://www.sncf-connect.com/"><img className="logo" src="/images/footer/connect.jpg" alt="logo-connect" /></a>
        <a href="https://wit.sncf.fr/"><img className="logo" src="/images/footer/wit.jpg" alt="logo-wit" /></a>
      </div>
    </div>
  );
}

export default Footer;
