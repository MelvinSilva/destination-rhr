import React, { useContext } from 'react';
import AuthTokenContext from './context/AuthTokenContext';

function Header() {
  const { user } = useContext(AuthTokenContext);

  return (
    <div className="header">
      {/* on regarde s'il y a quelque chose dans USER.FIRSTNAME */}
      {user.firstname && (
      <h1>
        Hello
        {user.firstname}
      </h1>
      )}

      <a href="/"><img className="logo" src="/images/logo.png" alt="logo" /></a>
      <h1>DESTINATION RHR</h1>
      <img className="logo-sncf" src="/images/logosncf.png" alt="logo-sncf" />
    </div>
  );
}

export default Header;
