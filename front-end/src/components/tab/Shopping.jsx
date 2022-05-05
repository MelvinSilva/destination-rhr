import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Shopping = () => {

    const { id_station } = useParams()
    const [dataShopping, setDataShopping] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:5001/stores/${id_station}`)
            .then((response) => setDataShopping(response.data[0]));
    }, []);
    return (
        <div className='Shopping'>
            <h1>{dataShopping.name_store}</h1>
        </div>
    );
};

export default Shopping;