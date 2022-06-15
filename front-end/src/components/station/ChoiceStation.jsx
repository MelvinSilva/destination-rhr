import axios from 'axios';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';



const ChoiceStation = () => {
    const [locality, setLocality] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:5001/stations")
            .then((response) => setLocality(response.data));
    }, []);
    
    return (
        <div className="choice-station">
            <video id="background-video" autoPlay loop muted>
                <source src="/images/production ID_4789847.mp4" type="video/mp4" />
            </video>
            <h1>CHOISISSEZ VOTRE GARE</h1>
            <div className="container-card">
                {locality.map((town) => (<li>
                    <div className="card-station">

                        <Link to={`/city-infos/${town.id}/accomodation`}><h3>{town.city}</h3>

                        <img src={town.picture} alt="" /> </Link>
                    </div>
                </li>
                ))}
=======
import React, { useEffect, useState, useContext } from 'react';
import AuthTokenContext from '../context/AuthTokenContext';

function ChoiceStation() {
  const [locality, setLocality] = useState([]);
  const { user } = useContext(AuthTokenContext);

  useEffect(() => {
    axios
      .get('http://localhost:5001/stations')
      .then((response) => setLocality(response.data));
  }, []);
  return (
    <div className="choice-station">
      <video id="background-video" muted>
        <source src="/images/bg-video.webm" type="video/mp4" />
      </video>
      {user && user.firstname && (
      <h1>
        Bienvenue
        {' '}
        <span>{user.firstname}</span>
        , veuillez choisir votre gare d&apos;arrivée.
      </h1>
      )}
      <div className="container-card">
        {locality.map((town) => (
          <li>
            <div className="card-station">

              <Link to={`/stations/${town.id}/accomodation`}>
                <h3>{town.city}</h3>

                <img src={town.picture} alt="" />
                {' '}
              </Link>
>>>>>>> 423ef1a0710fd74d9c194cae3586816e944b0438
            </div>
          </li>
        ))}
      </div>
    </div>

  );
}
export default ChoiceStation;
