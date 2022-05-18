/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthTokenContext from './context/AuthTokenContext';

function NoResult() {
  const returnLogin = useNavigate();
  const { user } = useContext(AuthTokenContext);
  const [reloaded, setReloaded] = useState(false);

  useEffect(() => {
    const redirect = () => {
      if (!user && reloaded) { // si il n'y a pas de user connecté
        setTimeout(() => { // methode setTimeout qui permet d'attendre 2s avant de passer à la ligne suivante
          returnLogin('/'); // redirection vers la page login
          setReloaded(false);
        }, 2000);
      }
    };

    redirect();
    setTimeout(() => {
      setReloaded(true);
    }, 500);
  }, [reloaded]);

  return (
    <div className="no-result">
      <h1>Vous n&apos;étes pas connecté, redirection en cours... </h1>
    </div>
  );
}

export default NoResult;
