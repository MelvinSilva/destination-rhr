import React, { useState } from 'react';
import { IoMail, IoPhonePortrait, IoLocationSharp, IoNavigateCircle, IoTime, IoNewspaper, IoColorFilter, IoBeer, IoTv } from 'react-icons/io5'
import { FaMugHot } from 'react-icons/fa'
import { MdIron, MdMicrowave, MdWifi, MdPedalBike, MdTerrain, MdGames } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import UpdateAccomodation from './UpdateAccomodation';



const GetAccomodation = (props) => {

    // le state update est sur "true" par défaut donc il affiche automatiquement le composant GetAccomodation
    const [update, setUpdate] = useState(true)

    // const navigate = useNavigate()

    // ici notre fonction qui permet lors du clik du boutton "Modifier les information" de basculer sur "pdateAccomodation"
    const handleUpdate = () => {
        setUpdate(!update)
        // navigate("update")  //on utilise ici le useNavigate pour afficher dans l'URL "update"
    }

    return (
        <div>
            {update
                ?
                <div className="accomodation">
                    <div className="container-accomodation">
                        <div className="container-left">
                            <div className="map">
                                <h2>Localisation</h2>
                                <iframe src={props.dataAccomodation.location} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
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
                                {props.dataAccomodation.bedroom_air_conditioning === 1 && <p><IoColorFilter />&ensp;Climatisation dans la chambre</p>}
                                {props.dataAccomodation.kitchen === 1 && <p><MdMicrowave />&ensp;Cuisine équipée et salle à manger à disposition</p>}
                                {props.dataAccomodation.bereage_dispenser === 1 && <p><IoBeer />&ensp;Distributeur automatique d'encas</p>}
                                {props.dataAccomodation.tv_room === 1 && <p><IoTv />&ensp;Salle de télévision</p>}
                                {props.dataAccomodation.cofee === 1 && <p><FaMugHot />&ensp;Café à disposition</p>}
                                {props.dataAccomodation.iron === 1 && <p><MdIron />&ensp;Fer à repasser</p>}
                                {props.dataAccomodation.wifi === 1 && <p><MdWifi />&ensp;Accès internet</p>}
                                {props.dataAccomodation.bike === 1 && <p><MdPedalBike />&ensp;Vélos à disposition à l'accueil</p>}
                                {props.dataAccomodation.terrace === 1 && <p><MdTerrain />&ensp;Terrasse</p>}
                                {props.dataAccomodation.board_games === 1 && <p><MdGames />&ensp;Jeux de sociétés</p>}
                                <div className="update-services">
                                    <button onClick={handleUpdate} className="btn">Modifier les informations</button>
                                    <button className="btn btn--red">Supprimer la fiche</button>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
                
                :
                <UpdateAccomodation dataAccomodation={props.dataAccomodation} setDataAccomodation={props.setDataAccomodation} setUpdate={setUpdate} />}
                {/* au moment du click handleUpdate ci dessus on bascule sur updateAccomodation en y passant les 2 props de ParentAccomodation et le props 
                setUpdate qui est sur ce meme composant qu'on va utiliser dans "updateAccomodation" */}
        </div>
    );
};

export default GetAccomodation;