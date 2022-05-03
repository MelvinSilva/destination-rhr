import axios from 'axios';
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
            <h1>CHOIX DE LA VILLE</h1>
            <div className="container-card">
                {locality.map((town) => (<li> <div className="card-station">
                    <h3>{town.city}</h3> 
                 <img src={town.picture} alt=""/>          
                    </div></li>))}
            </div>
        </div>
    );
};

export default ChoiceStation;














