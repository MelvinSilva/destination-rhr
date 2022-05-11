import React, { useEffect, useState } from 'react';
import { IoMail, IoPhonePortrait, IoLocationSharp, IoNavigateCircle, IoTime, IoNewspaper, IoColorFilter, IoBeer, IoTv } from 'react-icons/io5'
import { FaMugHot } from 'react-icons/fa'
import { MdIron, MdMicrowave, MdWifi, MdPedalBike, MdTerrain, MdGames } from 'react-icons/md'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UpdateAccomodation from './UpdateAccomodation';


const GetAccomodation = () => {
    // le state update est sur "true" par défaut donc il affiche automatiquement le composant GetAccomodation
    const [update, setUpdate] = useState(true)

    // const navigate = useNavigate()

    // ici notre fonction qui permet lors du clik du boutton "Modifier les information" de basculer sur "UpdateAccomodation"
    const handleUpdate = () => {
        setUpdate(!update)
        // navigate("update")  //on utilise ici le useNavigate pour afficher dans l'URL "update"
    }
    const { id_station } = useParams()
    const [dataAccomodation, setDataAccomodation] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:5001/accomodations/${id_station}`)
            .then((response) => setDataAccomodation(response.data[0]));
    }, []);

    return (
        <div>
            {update
                ?
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
                                {dataAccomodation.adress && <p><IoLocationSharp />&nbsp; {dataAccomodation.adress}, {dataAccomodation.postal_code}</p>}
                                {dataAccomodation.email && <p><IoMail />&nbsp; {dataAccomodation.email}</p>}
                                {dataAccomodation.phone_number && <p><IoPhonePortrait />&nbsp; {dataAccomodation.phone_number}</p>}
                                {dataAccomodation.distance_station && <p><IoNavigateCircle />&nbsp; {dataAccomodation.distance_station}</p>}
                                {dataAccomodation.reception && <p><IoTime />&nbsp; {dataAccomodation.reception}</p>}
                                {dataAccomodation.website && <p>💻 <a target="blank" href={dataAccomodation.website}> &nbsp;Site internet</a></p>}
                                <img src={dataAccomodation.picture_accomodation} alt="" />
                            </div>
                        </div>
                        <div className="container-right">
                            <h2>Services inclus</h2>
                            <div className="services-accomodation">
                                {dataAccomodation.e_press === 1 && <p><IoNewspaper />&ensp;E-presse</p>}
                                {dataAccomodation.bedroom_air_conditioning === 1 && <p><IoColorFilter />&ensp;Climatisation dans la chambre</p>}
                                {dataAccomodation.kitchen === 1 && <p><MdMicrowave />&ensp;Cuisine équipée</p>}
                                {dataAccomodation.bereage_dispenser === 1 && <p><IoBeer />&ensp;Distributeur automatique d'encas</p>}
                                {dataAccomodation.tv_room === 1 && <p><IoTv />&ensp;Salle de télévision</p>}
                                {dataAccomodation.cofee === 1 && <p><FaMugHot />&ensp;Café à disposition</p>}
                                {dataAccomodation.iron === 1 && <p><MdIron />&ensp;Fer à repasser</p>}
                                {dataAccomodation.wifi === 1 && <p><MdWifi />&ensp;Accès internet</p>}
                                {dataAccomodation.bike === 1 && <p><MdPedalBike />&ensp;Vélos à disposition à l'accueil</p>}
                                {dataAccomodation.terrace === 1 && <p><MdTerrain />&ensp;Terrasse</p>}
                                {dataAccomodation.board_games === 1 && <p><MdGames />&ensp;Jeux de sociétés</p>}
                                <div className="update-services">
                                    <button onClick={handleUpdate} className="btn">Modifier les services</button>
                                    <button className="btn btn--red">Supprimer la fiche</button>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>

                :
                <UpdateAccomodation dataAccomodation={dataAccomodation} setDataAccomodation={setDataAccomodation} setUpdate={setUpdate} />}
            {/* au moment du click handleUpdate ci dessus on bascule sur updateAccomodation en y passant les 3 const qu'on va utiliser dans "updateAccomodation" */}
        </div>
    );
};

export default GetAccomodation;