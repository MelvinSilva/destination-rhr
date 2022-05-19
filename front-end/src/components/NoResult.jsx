/* eslint-disable indent */
/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthTokenContext from './context/AuthTokenContext';

function NoResult() {
  const returnLogin = useNavigate();
  const { user } = useContext(AuthTokenContext);
  const [reloaded, setReloaded] = useState(false);

  useEffect(() => {
    const redirect = () => {
        // si user n'est pas connecté et que RELOADED est VRAI tu retournes sur login
      if (!user && reloaded === true) {
        setTimeout(() => { // methode setTimeout qui permet d'attendre 2s avant de passer à la ligne suivante
          returnLogin('/'); // redirection vers la page login
          setReloaded(false);
        }, 3000);
      }
    };
    redirect();
    setTimeout(() => {
      setReloaded(true);
    }, 500);
  }, [reloaded]);

  return (
    <div className="no-result">
      <h1>
        Vous n&apos;étes pas connecté ou non autorisé à consulter cette page, redirection en cours...

      </h1>
      <p>(si la page ne se recharge pas cliquer sur le bouton ci dessous)</p>
      <Link to="/"><button className="btn" type="button">Retour accueil</button></Link>
    </div>
  );
}

export default NoResult;
