import React from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';




const ChoiceStation = () => {
    const [locality,setLocality] = useState({})
    
    useEffect(() => {
        axios
          .get("http://localhost:5001/station")
          .then((response) => setCity(response.data[0]));
      }, []);
    return (
        <div className="choice-station">
            <h1>CHOIX DE LA VILLE</h1>
            <div className="container-card">
                <div className="card-station">
                    <h3>{locality.city}</h3>
                </div>
                

            </div>


        </div>
    );
};

export default ChoiceStation;














