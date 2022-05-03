import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Accomodation = () => {
    const [dataAccomodation, setDataAccomodation] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:5001/accomodations")
            .then((response) => setDataAccomodation(response.data[12]));
    }, []);

    return (
        <div className="accomodation">
            <div className="container-left">
                <div className="map">
                    <h2>Maps</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21132.28412833883!2d2.637735875122883!3d48.54213257248209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5fa64b0617d79%3A0xc7b890eb02e993a!2s%C3%89glise%20Saint-Aspais%20de%20Melun!5e0!3m2!1sfr!2sfr!4v1651498046192!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="change-services">
                    <button className="btn">Mettre à jour les services</button>
                    <button className="btn btn--red">Supprimer la fiche (admin)</button>
                </div>

            </div>
            <div className="container-center">
                <h2>{dataAccomodation.accomodation}</h2>
                <div className="info-accomodation">
                    <p><span>🏡 Adresse :</span> {dataAccomodation.adress}</p>
                    <p><span>📬 Mail :</span> {dataAccomodation.email}</p>
                    <p><span>📱 Numéro :</span> {dataAccomodation.phone_number}</p>
                    {dataAccomodation.distance_station && <p><span>📍 Distance gare :</span></p>}
                    {dataAccomodation.reception && <p><span>🕥 Horaire accueil :</span></p>}
                </div>
            </div>
            <div className="container-right">
                <h2>Services inclus</h2>
                <div className="services-accomodation">
                    {dataAccomodation.e_press === 1 && <p>🗞 E-presse</p>}
                    {dataAccomodation.bedroom_air_conditioner === 1 && <p>❄ Climatisation dans la chambre</p>}
                    {dataAccomodation.kitchen === 1 && <p>🍽 Cuisine équipée et salle à manger à disposition</p>}
                    {dataAccomodation.tv_room === 1 && <p>📺 Salle de télévision</p>}
                    {dataAccomodation.cofee === 1 && <p>☕ Café à disposition</p>}
                    {dataAccomodation.wifi === 1 && <p>🌐 Accès internet</p>}
                    {dataAccomodation.bike === 1 && <p>🚲 Vélos à disposition à l'accueil</p>}
                    {dataAccomodation.terrace === 1 && <p>🪟 Terrasse</p>}
                    {dataAccomodation.board_games === 1 && <p>🎲 Jeux de sociétés</p>}
                    {dataAccomodation.website && <p>💻 <a href={dataAccomodation.website}>Site internet</a></p>}

                </div>
            </div>
        </div >
    );
};

export default Accomodation;