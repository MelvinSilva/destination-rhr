import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import GetAccomodation from './GetAccomodation';

const ParentAccomodation = () => {

    const { id_station } = useParams() 
    const [dataAccomodation, setDataAccomodation] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:5001/accomodations/${id_station}`)
            .then((response) => setDataAccomodation(response.data[0]));
    }, []);

    return (
        <div> 
        {/* on passe en props dataAccomodation pour le recuperer dans GetAccomodation et setDataAccomododation pour le recuperer dans updateAccomodation */}
          <GetAccomodation  dataAccomodation={dataAccomodation} setDataAccomodation={setDataAccomodation}/> 
        </div>
    );
};

export default ParentAccomodation;