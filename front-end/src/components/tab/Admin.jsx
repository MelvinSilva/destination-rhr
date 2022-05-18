/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

    <div className="choice-eat">
      <h1>Page administration</h1>
      <div>
        <button className="btn" type="submit" onClick={submit}>Effacer un utilisateur</button>
      </div>
      {/* {eat.length > 0 && <h1>☟ Se restaurer à {eat[0].city} ☟</h1>} Rendu conditionnel hors mapping    */}
      <div className="container-card">
        {users.map((user) => (
          <li>
            <div className="container-global">

              <p>{user.id}</p>
              <br />
              <p>{user.firstname}</p>
              <br />
              <p>{user.lastname}</p>
              <br />
              <p>{user.email}</p>
              <br />
              <p>{user.profil_user}</p>
              <br />
              <p>{user.login}</p>
              <br />

              {popup ? (
                <div className="popup">

                  <button className="btn--red" type="button" onClick={() => deleteUser(user.id)}>Valider la suppression</button>
                  <br />
                  <button className="btn--red" type="submit" onClick={submit}>Retour</button>
                </div>
              ) : null}

            </div>
          </li>
        ))}
      </div>
      <div />
    </div>
  );
}
export default Admin;
