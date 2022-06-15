/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdKeyboardReturn } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Admin() {
  const [users, setUsers] = useState([]);
  const [statut, setStatut] = useState();
  const [popup, setPopup] = useState(false);
  // displayUser permet de réafficher les id non supprimés gràce au filter
  const displayUser = (userId) => {
    const sortedUsers = users.filter((user) => user.id !== userId);
    setUsers(sortedUsers);
  };
  const submit = () => {
    setPopup(!popup);
  };
  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    axios
      .get('http://localhost:5001/users')
      .then((response) => setUsers(response.data));
  }, []);

  const deleteUser = (userId) => {
    if (confirm("Voulez-vous vraiment supprimer l'utilisateur❓")) {
      axios
        .delete(`http://localhost:5001/users/${userId}`)
        .then(displayUser(userId));
      alert("L'utilisateur a été supprimé ✅");
    } else {
      alert("L'utilisateur n'a pas été supprimé ❌");
    }
  };

  const updateUser = (userId) => {
    axios
      .put(`http://localhost:5001/users/${userId}`, { profil_user: statut })
      .then(() => refreshPage());
  };

  return (

    <div className="admin">
      <h1>Liste des utilisateurs</h1>
      <div className="delete-card">
        {users.map((user) => (
          <li>
            <div className="user-informations">
              <p>
                Prénom :
                {' '}
                <span>{user.firstname}</span>
              </p>
              <p>
                Nom :
                {' '}
                <span>{user.lastname}</span>
              </p>
              <p>
                Email :
                {' '}
                <span>{user.email}</span>
              </p>
              <p>
                Identifiant :
                {' '}
                <span>{user.cp_number}</span>
              </p>
              <p>
                Rôle :
                {' '}
                <span>{user.profil_user}</span>
              </p>
              {(popup) ? (
                <div className="popup">
                  <div className="select">
                    <select onChange={(e) => setStatut(e.target.value)} name="statut" id="statut">
                      <option value="">Modifier le rôle de l&apos;utilisateur</option>
                      <option value="user">USER</option>
                      <option value="admin">ADMIN</option>
                    </select>
                  </div>
                  <div className="button">
                    <button className="btn--red" type="button" onClick={() => deleteUser(user.id)}>
                      Supprimer l&apos;utilisateur
                    </button>
                    <button className="btn" type="button" onClick={() => updateUser(user.id)}>
                      Valider le nouveau rôle
                    </button>
                    <button className="btn-return" type="submit" onClick={submit}>
                      <MdKeyboardReturn />
                    </button>
                  </div>
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
