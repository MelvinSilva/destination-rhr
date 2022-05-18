import React from 'react';
import { RiAdminFill } from 'react-icons/ri';

function Footer() {
  return (
    <div className="footer">
      <div className="infos-footer">
        <p>Destination RHR by Jean-Mi, Fred, Steph & Melvin @ Wild Code School</p>
        <a href="/administration">
          <p className="link-admin">
            <RiAdminFill />
            {' '}
            espace administration
          </p>
        </a>
      </div>
    </div>
  );
}

export default Footer;
