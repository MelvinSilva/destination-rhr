import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import AuthTokenContext from '../context/AuthTokenContext';





const ChoiceStation = () => {
    const [locality, setLocality] = useState([])
    const { user } = useContext(AuthTokenContext)

    
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
            {user && user.firstname && <p>Bienvenue {user.firstname}, vous etes connecté</p>}
            <div className="container-card">
                {locality.map((town) => (<li>
                    <div className="card-station">

                        <Link to={`/stations/${town.id}/accomodation`}><h3>{town.city}</h3>

                        <img src={town.picture} alt="" /> </Link>
                    </div>
                </li>
                ))}
            </div> 
        </div> 
     
    );
};
export default ChoiceStation;














