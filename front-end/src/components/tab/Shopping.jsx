import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Shopping = () => {
    const { id_station } = useParams()
    const [store, setStore] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:5001/stores/${id_station}`)
            .then((response) => setStore(response.data));
    }, []);

    return (<div className="choice-eat">
        {/* {eat.length > 0 && <h1>☟ Se restaurer à {eat[0].city} ☟</h1>} Rendu conditionnel hors mapping    */}
        <div className="container-card">

            {store.slice(0, 6).map((shop) => (<li>
                <div className="container-global">
                    <div className="container-top">

                        <h3>{shop.name_store}</h3>
                        <h3>{shop.city}</h3>
                        <hr />
                        {shop.adress_store !== "null" && <p><strong>Adresse : </strong>{shop.adress_store}</p>}
                        {shop.schedules !== "null" && <p><strong>Horaires : </strong> {shop.schedules}</p>}
                        {shop.particularity_schedules!== "null" && <p><strong>Compléments: </strong> {shop.particularity_schedules}</p>}

                    </div>
                    <div className="container-bottom">
                        <img src={shop.picture_store} alt="" />
                        <h3>{shop.name_eat}</h3>
                    </div>
                </div>
            </li>))}
        </div>
    </div >
    );
};

export default Shopping;