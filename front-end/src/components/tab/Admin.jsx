/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MdDeleteForever, MdKeyboardReturn,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { refresh } from 'aos';

function Admin() {
  const [users, setUsers] = useState([]);
  const [statut, setStatut] = useState();

  const [popup, setPopup] = useState(false);
  // supp permet de réafficher les id non supprimer gràce au filter
  const supp = (userId) => {
    const sortedUsers = users.filter((user) => user.id !== userId);
    setUsers(sortedUsers);
  };
  // supp permet de réafficher les id non supprimer gràce au filter
  const submit = () => {
    setPopup(!popup);
  };

  const refreshPage = () => { // actualisation automatique de la page
    window.location.reload();
  };

  useEffect(() => {
    axios
      .get('http://localhost:5001/users')
      .then((response) => setUsers(response.data));
  }, []);

  const deleteUser = (userId) => {
    axios
      .delete(`http://localhost:5001/users/${userId}`)
      .then(supp(userId));
  };

  const updateUser = (userId) => {
    axios
      .put(`http://localhost:5001/users/${userId}`, { profil_user: statut })
      .then(refreshPage());
  };

  return (

    <div className="admin">
      <h1>Liste des utilisateurs</h1>
      {/* {eat.length > 0 && <h1>☟ Se restaurer à {eat[0].city} ☟</h1>} Rendu conditionnel hors mapping    */}
      <div className="delete-card">
        {users.map((user) => (
          <li>
            <div className="user-informations">
              <p>
                Prénom :
                {' '}
                <span>{`${user.firstname}`.toUpperCase()}</span>
              </p>
              <p>
                Nom :
                {' '}
                <span>{`${user.lastname}`.toUpperCase()}</span>
              </p>
              <p>
                Email :
                {' '}
                <span>{`${user.email}`.toUpperCase()}</span>
              </p>
              <p>
                Login :
                {' '}
                <span>{user.login}</span>
              </p>
              <p>
                Statut :
                {' '}
                {`${user.profil_user}`.toUpperCase()}
              </p>
              {popup ? (
                <div className="popup">
                  <p>
                    <label htmlFor="admin">
                      <select onChange={(e) => setStatut(e.target.value)} name="statut" id="statut">
                        <option value="">Sélectionner votre statut</option>
                        <option value="user">USER</option>
                        <option value="admin">ADMIN</option>
                      </select>
                    </label>
                  </p>
                  <button className="btn--red" type="button" onClick={() => deleteUser(user.id)}>
                    <MdDeleteForever />
                    Supprimer
                  </button>
                  <button className="btn" type="button" onClick={() => updateUser(user.id)}>
                    <MdDeleteForever />
                    Valider la modification
                  </button>
                  <button className="btn" type="submit" onClick={submit}>
                    <MdKeyboardReturn />
                    Retour
                  </button>
                </div>
              ) : null}

            </div>
          </li>
        ))}
      </div>
      <div className="button-bottom">
        <button className="btn" type="submit" onClick={submit}>GESTION DES UTILISATEURS</button>
        <Link to="/home/choice-station"><button className="btn-return-home" type="button">RETOUR ACCUEIL</button></Link>
      </div>
    </div>
  );
}
export default Admin;
