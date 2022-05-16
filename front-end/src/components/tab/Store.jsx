import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Store = () => {
    const { id_station } = useParams()
    const [store, setStore] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:5001/stores/${id_station}`)
            .then((response) => setStore(response.data));
    }, []);

    return (
    <div className="choice-store">
        {/* {eat.length > 0 && <h1>☟ Se restaurer à {eat[0].city} ☟</h1>} Rendu conditionnel hors mapping    */}
        <div className="container-card">

            {store.slice(0, 30).map((shop) => (<li>
                <div className="container-global">
                    <div className="container-top">

                        <h2>{`${shop.name_store}`.toUpperCase()}</h2>
                        <h3>{shop.city}</h3>
                        <hr />
                        {shop.adress_store && <p><strong>Adresse : </strong>{shop.adress_store}</p>}
                        {shop.schedules && <p><strong>Horaires : </strong> {shop.schedules}</p>}
                        {shop.particularity_schedules!== "null" && <p><strong>Compléments: </strong> {shop.particularity_schedules}</p>}

                    </div>
                    <div className="container-bottom-store">
                        {shop.picture_store ? <img src={shop.picture_store} alt="image-store" /> : <img src="/images/visuel-non-dispo" alt="no-image" />}
                        {shop.name_eat && <h3>{shop.name_eat}</h3>}
                    </div>
                </div>
            </li>))}
        </div>
    </div >
    );
};

export default Store;