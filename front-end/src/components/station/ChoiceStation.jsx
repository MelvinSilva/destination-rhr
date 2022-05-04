import axios from 'axios';
import { Link } from 'react-router-dom';
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
            <h1>☟ CHOISISSEZ VOTRE GARE ☟</h1>
            <div className="container-card">
                {locality.map((town) => (<li>
                    <div className="card-station">

                        <Link to={`/accomodations/${town.id} `}><h3>{town.city}</h3>

                        <img src={town.picture} alt="" /> </Link>
                    </div>
                </li>
                ))}
            </div>
        </div>
    );
};

export default ChoiceStation;














