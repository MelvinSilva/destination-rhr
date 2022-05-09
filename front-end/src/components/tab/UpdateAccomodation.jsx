import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { IoMail, IoPhonePortrait, IoLocationSharp, IoNavigateCircle, IoTime, IoNewspaper, IoColorFilter, IoBeer, IoTv } from 'react-icons/io5'
import { FaMugHot } from 'react-icons/fa'
import { MdIron, MdMicrowave, MdWifi, MdPedalBike, MdTerrain, MdGames } from 'react-icons/md'


const UpdateAccomodation = (props) => {

    useEffect(() => {
        axios
            .put(`http://localhost:5001/accomodations/${props.dataAccomodation.id}`)
            .then((response) => props.setDataAccomodation(response.data[0]));
    }, []);



    return (
        <div>
            <div className="accomodation">
                <div className="container-accomodation">
                    <div className="container-left">
                    </div>
                    <div className="container-center">
                        <h2>{props.dataAccomodation.accomodation} - {`${props.dataAccomodation.city}`.toUpperCase()}</h2>
                        <div className="info-accomodation">
                            {props.dataAdress && <p><span><IoLocationSharp />&nbsp;Adresse :</span> {props.dataAccomodation.adress}, {props.dataAccomodation.postal_code}</p>}
                            {props.dataAccomodation.email && <p><span><IoMail /> &nbsp;Mail : </span> {props.dataAccomodation.email}</p>}
                            {props.dataAccomodation.phone_number && <p><span><IoPhonePortrait />&nbsp;Numéro :</span> {props.dataAccomodation.phone_number}</p>}
                            {props.dataAccomodation.distance_station && <p><span><IoNavigateCircle />&nbsp;Distance gare : </span>{props.dataAccomodation.distance_station}</p>}
                            {props.dataAccomodation.reception && <p><span><IoTime /> &nbsp;Horaire accueil : </span>{props.dataAccomodation.reception}</p>}
                            {props.dataAccomodation.website && <p>💻 <a target="blank" href={props.dataAccomodation.website}> &nbsp;Site internet</a></p>}
                            <img src={props.dataAccomodation.picture_accomodation} alt="" />
                        </div>
                    </div>
                    <div className="container-right">
                        <h2>Services inclus</h2>
                        <div className="services-accomodation">

                           {props.dataAccomodation.e_press === 1 && <p><IoNewspaper />&ensp;E-presse</p>}


                             <p>{props.dataAccomodation.bedroom_air_conditioning}<IoColorFilter />&ensp;Climatisation dans la chambre</p>
                            <p>{props.dataAccomodation.kitchen}<MdMicrowave />&ensp;Cuisine équipée et salle à manger à disposition</p>
                            <p>{props.dataAccomodation.bereage_dispenser}<IoBeer />&ensp;Distributeur automatique d'encas</p>
                            <p>{props.dataAccomodation.tv_room}<IoTv />&ensp;Salle de télévision</p>
                            <p> {props.dataAccomodation.cofee}<FaMugHot />&ensp;Café à disposition</p>
                            <p> {props.dataAccomodation.iron}<MdIron />&ensp;Fer à repasser</p>
                            <p> {props.dataAccomodation.wifi}<MdWifi />&ensp;Accès internet</p>
                            <p> {props.dataAccomodation.bike}<MdPedalBike />&ensp;Vélos à disposition à l'accueil</p>
                            <p> {props.dataAccomodation.terrace}<MdTerrain />&ensp;Terrasse</p>
                            <p> {props.dataAccomodation.board_games}<MdGames />&ensp;Jeux de sociétés</p>
                            <div className="update-services">

                                <button className="btn btn--red">Supprimer la fiche</button>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default UpdateAccomodation;