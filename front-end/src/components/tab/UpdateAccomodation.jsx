/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
import React from 'react';
import axios from 'axios';
import {
  IoMail, IoPhonePortrait, IoLocationSharp, IoNavigateCircle,
  IoTime, IoNewspaper, IoColorFilter, IoBeer, IoTv,
} from 'react-icons/io5';
import { FaMugHot } from 'react-icons/fa';
import {
  MdIron, MdMicrowave, MdWifi, MdPedalBike, MdTerrain, MdGames,
} from 'react-icons/md';

function UpdateAccomodation(props) {
  const updateSubmit = () => {
    axios
      .put(`http://localhost:5001/accomodations/${props.dataAccomodation.id}`, props.dataAccomodation, { withCredentials: true })
      .then(() => props.setUpdate(true))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="update-accomodation">
        <div className="container-update">
          <div className="card-left">
            <h2>
              {props.dataAccomodation.accomodation}
              {' '}
              -
              {' '}
              {`${props.dataAccomodation.city}`.toUpperCase()}
            </h2>
            <div className="infos-update">
              {props.dataAccomodation.adress && (
                <p>
                  <IoLocationSharp />
                  &nbsp;
                  {' '}
                  {props.dataAccomodation.adress}
                  ,
                  {' '}
                  {props.dataAccomodation.postal_code}
                </p>
              )}
              {props.dataAccomodation.email && (
                <p>
                  <IoMail />
                  &nbsp;
                  {' '}
                  {props.dataAccomodation.email}
                </p>
              )}
              {props.dataAccomodation.phone_number && (
                <p>
                  <IoPhonePortrait />
                  &nbsp;
                  {' '}
                  {props.dataAccomodation.phone_number}
                </p>
              )}
              {props.dataAccomodation.distance_station && (
                <p>
                  <IoNavigateCircle />
                  &nbsp;
                  {' '}
                  {props.dataAccomodation.distance_station}
                </p>
              )}
              {props.dataAccomodation.reception && (
                <p>
                  <IoTime />
                  &nbsp;
                  {' '}
                  {props.dataAccomodation.reception}
                </p>
              )}
              {props.dataAccomodation.website && (
                <p>
                  💻
                  <a target="blank" href={props.dataAccomodation.website}> &nbsp;Site internet</a>
                </p>
              )}
              <img src={props.dataAccomodation.picture_accomodation} alt="" />
            </div>
          </div>
          <div className="card-right">
            <h2>Ajouter/supprimer un service</h2>
            <div className="services-update">
              {props.dataAccomodation.e_press === 1
                ? (
                  <label htmlFor="e-press">
                    <p>
                      <IoNewspaper />
                      &ensp;E-presse&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, e_press: 0 })}
                        defaultChecked
                      />
                    </p>
                  </label>
                )
                : (
                  <label htmlFor="e-press">
                    <p style={{ color: '#cbc8c8' }}>
                      <IoNewspaper />
                      &ensp;E-presse&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, e_press: 1 })}
                      />
                    </p>
                  </label>
                )}

              {props.dataAccomodation.bedroom_air_conditioning === 1
                ? (
                  <label htmlFor="e-press">
                    <p>
                      <IoColorFilter />
                      &ensp;Climatisation dans la chambre&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, bedroom_air_conditioning: 0 })}
                        defaultChecked
                      />
                    </p>
                  </label>
                )
                : (
                  <label htmlFor="e-press">
                    <p style={{ color: '#cbc8c8' }}>
                      <IoColorFilter />
                      &ensp;Climatisation dans la chambre&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, bedroom_air_conditioning: 1 })}
                      />
                    </p>
                  </label>
                )}

              {props.dataAccomodation.kitchen === 1
                ? (
                  <label htmlFor="e-press">
                    <p>
                      <MdMicrowave />
                      &ensp;Cuisine équipée&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, kitchen: 0 })}
                        defaultChecked
                      />
                    </p>
                  </label>
                )
                : (
                  <label htmlFor="e-press">
                    <p style={{ color: '#cbc8c8' }}>
                      <MdMicrowave />
                      &ensp;Cuisine équipée&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, kitchen: 1 })}
                      />
                    </p>
                  </label>
                )}

              {props.dataAccomodation.bereage_dispenser === 1
                ? (
                  <label htmlFor="e-press">
                    <p>
                      <IoBeer />
                      &ensp;Distributeur automatique d&apos;encas&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, bereage_dispenser: 0 })}
                        defaultChecked
                      />
                    </p>
                  </label>
                )
                : (
                  <label htmlFor="e-press">
                    <p style={{ color: '#cbc8c8' }}>
                      <IoBeer />
                      &ensp;Distributeur automatique d&apos;encas&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, bereage_dispenser: 1 })}
                      />
                    </p>
                  </label>
                )}

              {props.dataAccomodation.tv_room === 1
                ? (
                  <label htmlFor="e-press">
                    <p>
                      <IoTv />
                      &ensp;Salle de télévision&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, tv_room: 0 })}
                        defaultChecked
                      />
                    </p>
                  </label>
                )
                : (
                  <label htmlFor="e-press">
                    <p style={{ color: '#cbc8c8' }}>
                      <IoTv />
                      &ensp;Salle de télévision&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, tv_room: 1 })}
                      />
                    </p>
                  </label>
                )}

              {props.dataAccomodation.coffee === 1
                ? (
                  <label htmlFor="e-press">
                    <p>
                      <FaMugHot />
                      &ensp;Café à disposition&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, coffee: 0 })}
                        defaultChecked
                      />
                    </p>
                  </label>
                )
                : (
                  <label htmlFor="e-press">
                    <p style={{ color: '#cbc8c8' }}>
                      <FaMugHot />
                      &ensp;Café à disposition&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, coffee: 1 })}
                      />
                    </p>
                  </label>
                )}

              {props.dataAccomodation.iron === 1
                ? (
                  <label htmlFor="e-press">
                    <p>
                      <MdIron />
                      &ensp;Fer à repasser&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, iron: 0 })}
                        defaultChecked
                      />
                    </p>
                  </label>
                )
                : (
                  <label htmlFor="e-press">
                    <p style={{ color: '#cbc8c8' }}>
                      <MdIron />
                      &ensp;Fer à repasser&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, iron: 1 })}
                      />
                    </p>
                  </label>
                )}

              {props.dataAccomodation.wifi === 1
                ? (
                  <label htmlFor="e-press">
                    <p>
                      <MdWifi />
                      &ensp;Accès internet&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, wifi: 0 })}
                        defaultChecked
                      />
                    </p>
                  </label>
                )
                : (
                  <label htmlFor="e-press">
                    <p style={{ color: '#cbc8c8' }}>
                      <MdWifi />
                      &ensp;Accès internet&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, wifi: 1 })}
                      />
                    </p>
                  </label>
                )}

              {props.dataAccomodation.bike === 1
                ? (
                  <label htmlFor="bike">
                    <p>
                      <MdPedalBike />
                      &ensp;Vélos à disposition à l&apos;accueil&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, bike: 0 })}
                        defaultChecked
                      />
                    </p>
                  </label>
                )
                : (
                  <label htmlFor="bike">
                    <p style={{ color: '#cbc8c8' }}>
                      <MdPedalBike />
                      &ensp;Vélos à disposition à l&apos;accueil&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, bike: 1 })}
                      />
                    </p>
                  </label>
                )}

              {props.dataAccomodation.terrace === 1
                ? (
                  <label htmlFor="e-press">
                    <p>
                      <MdTerrain />
                      &ensp;Terrasse&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, terrace: 0 })}
                        defaultChecked
                      />
                    </p>
                  </label>
                )
                : (
                  <label htmlFor="e-press">
                    <p style={{ color: '#cbc8c8' }}>
                      <MdTerrain />
                      &ensp;Terrasse&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, terrace: 1 })}
                      />
                    </p>
                  </label>
                )}

              {props.dataAccomodation.board_games === 1
                ? (
                  <label htmlFor="e-press">
                    <p>
                      <MdGames />
                      &ensp;Jeux de sociétés&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, board_games: 0 })}
                        defaultChecked
                      />
                    </p>
                  </label>
                )
                : (
                  <label htmlFor="e-press">
                    <p style={{ color: '#cbc8c8' }}>
                      <MdGames />
                      &ensp;Jeux de sociétés&ensp;
                      <input
                        id="e-press"
                        type="checkbox"
                        onClick={() => props.setDataAccomodation({ ...props.dataAccomodation, board_games: 1 })}
                      />
                    </p>
                  </label>
                )}
              <br />
              <button
                type="button"
                onClick={updateSubmit}
                className="btn"
              >
                VALIDER LES CHANGEMENTS
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateAccomodation;
