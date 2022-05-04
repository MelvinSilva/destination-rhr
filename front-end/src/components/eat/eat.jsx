import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Eat = () => {
    const { id_station } = useParams()
    const [eat, setEat] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:5001/eats/${id_station}`)
            .then((response) => setEat(response.data));
    }, []);
    return (<div className="choice-station">
         
        <div className="container-card">
    {eat.length > 0 && <h1>Restauration à {eat[0].city}</h1>}
            {eat.map((restaurant) => (<li>
                <div className="card-station">

                    <h3>{restaurant.name_eat}</h3>
                    <h3>Adresse : {restaurant.adress_eat}</h3>
                    <h3>Réduction avec Carmillon : {restaurant.reduction}</h3>
                    <h3>Autre réduction : {restaurant.other_reduction}</h3>

                </div>
            </li>))}
        </div>
    </div>
    );
};

export default Eat;