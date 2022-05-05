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
        {/* {eat.length > 0 && <h1>☟ Se restaurer à {eat[0].city} ☟</h1>} Rendu conditionnel hors mapping    */}
        <div className="container-card">
            {eat.slice(0, 6).map((restaurant) => (<li>
                <div className="container-global">
                    <div className="container-top">
                        <h3>{restaurant.name_eat}</h3>
                        <h3>{restaurant.city}</h3>
                        <hr />
                        {restaurant.adress_eat !== "null" && <p><strong>Adresse : </strong>{restaurant.adress_eat}</p>}
                        {restaurant.reduction !== "null" && <p><strong>Réduction avec Carmillon : </strong> {restaurant.reduction}</p>}
                        {restaurant.other_reduction !== "null" && <p><strong>Autre réduction : </strong> {restaurant.other_reduction}</p>}
                    </div>
                    <div className="container-bottom">
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