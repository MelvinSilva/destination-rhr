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

    return (<div className="choice-eat">
        {eat.length > 0 && <h1>☟ Se restaurer à {eat[0].city} ☟</h1>}
        <div className="container-card">

            {eat.map((restaurant) => (<li>
                <div className="container-global">
                    <div className="container-left">

                        <h3>{restaurant.name_eat}</h3>
                        {restaurant.adress_eat !== "null" && <p>Adresse : {restaurant.adress_eat}</p>}
                        {restaurant.reduction !== "null" && <p>Réduction avec Carmillon : {restaurant.reduction}</p>}
                        {restaurant.other_reduction !== "null" && <p>Autre réduction : {restaurant.other_reduction}</p>}

                    </div>
                    <div className="container-right">
                        <img src={restaurant.picture_eat} alt="" />
                        <h3>{restaurant.name_eat}</h3>
                    </div>
                </div>

            </li>))}
        </div>
    </div >
    );
};

export default Eat;