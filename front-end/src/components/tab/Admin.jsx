/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MdDeleteForever, MdKeyboardReturn,
} from 'react-icons/md';

function Admin() {
  const [users, setUsers] = useState([]);
  const [popup, setPopup] = useState(false);
  const supp = (userId) => {
    const sortedUsers = users.filter((user) => user.id !== userId);
    setUsers(sortedUsers);
  };
  // supp permet de réafficher les id non supprimer gràce au filter
  const submit = () => {
    setPopup(!popup);
  };
  // supp permet de réafficher les id non supprimer gràce au filter

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
                Type de profil :
                {' '}
                <span>{`${user.profil_user}`.toUpperCase()}</span>
              </p>
              <p>
                ID :
                {' '}
                <span>{user.id}</span>
              </p>

              {popup ? (
                <div className="popup">

                  <button className="btn--red" type="button" onClick={() => deleteUser(user.id)}>
                    <MdDeleteForever />
                    Supprimer
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
      <div className="button-delete">
        <button className="btn" type="submit" onClick={submit}>GESTION DES UTILISATEURS</button>
      </div>
    </div>
  );
}
export default Admin;
