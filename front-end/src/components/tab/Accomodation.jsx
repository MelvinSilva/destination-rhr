import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { IoMail, IoPhonePortrait, IoLocationSharp, IoNavigateCircle, IoTime, IoNewspaper, IoColorFilter, IoBeer, IoTv } from 'react-icons/io5'
import { FaMugHot } from 'react-icons/fa'
import { MdIron, MdMicrowave, MdWifi, MdPedalBike, MdTerrain, MdGames } from 'react-icons/md'


const Accomodation = () => {
    const { id_station } = useParams()
    const [dataAccomodation, setDataAccomodation] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:5001/accomodations/${id_station}`)
            .then((response) => setDataAccomodation(response.data[0]));
    }, []);


    return (
        <div>
            <div className="accomodation">
                <div className="container-accomodation">
                    <div className="container-left">
                        <div className="map">
                            <h2>Localisation</h2>
                            <iframe src={dataAccomodation.location} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="container-center">
                        <h2>{dataAccomodation.accomodation} - {`${dataAccomodation.city}`.toUpperCase()}</h2>
                        <div className="info-accomodation">
                            {dataAccomodation.adress && <p><span><IoLocationSharp />&nbsp;Adresse :</span> {dataAccomodation.adress}, {dataAccomodation.postal_code}</p>}
                            {dataAccomodation.email && <p><span><IoMail /> &nbsp;Mail : </span> {dataAccomodation.email}</p>}
                            {dataAccomodation.phone_number && <p><span><IoPhonePortrait />&nbsp;Numéro :</span> {dataAccomodation.phone_number}</p>}
                            {dataAccomodation.distance_station && <p><span><IoNavigateCircle />&nbsp;Distance gare : </span>{dataAccomodation.distance_station}</p>}
                            {dataAccomodation.reception && <p><span><IoTime /> &nbsp;Horaire accueil : </span>{dataAccomodation.reception}</p>}
                            {dataAccomodation.website && <p>💻 <a target="_blank" href={dataAccomodation.website}> &nbsp;Site internet</a></p>}
                            <img src={dataAccomodation.picture_accomodation} alt="" />
                        </div>
                    </div>
                    <div className="container-right">
                        <h2>Services inclus</h2>
                        <div className="services-accomodation">
                            {dataAccomodation.e_press === 1 && <p><IoNewspaper />&ensp;E-presse</p>}
                            {dataAccomodation.bedroom_air_conditioning === 1 && <p><IoColorFilter />&ensp;Climatisation dans la chambre</p>}
                            {dataAccomodation.kitchen === 1 && <p><MdMicrowave />&ensp;Cuisine équipée et salle à manger à disposition</p>}
                            {dataAccomodation.bereage_dispenser === 1 && <p><IoBeer />&ensp;Distributeur automatique d'encas</p>}
                            {dataAccomodation.tv_room === 1 && <p><IoTv />&ensp;Salle de télévision</p>}
                            {dataAccomodation.cofee === 1 && <p><FaMugHot />&ensp;Café à disposition</p>}
                            {dataAccomodation.iron === 1 && <p><MdIron />&ensp;Fer à repasser</p>}
                            {dataAccomodation.wifi === 1 && <p><MdWifi />&ensp;Accès internet</p>}
                            {dataAccomodation.bike === 1 && <p><MdPedalBike />&ensp;Vélos à disposition à l'accueil</p>}
                            {dataAccomodation.terrace === 1 && <p><MdTerrain />&ensp;Terrasse</p>}
                            {dataAccomodation.board_games === 1 && <p><MdGames />&ensp;Jeux de sociétés</p>}
                            <div className="update-services">
                                <button className="btn">Mettre à jour les informations</button>
                                <button className="btn btn--red">Supprimer la fiche</button>
                            </div>

                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Accomodation;