import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Admin() {
  const [users, setUsers] = useState([]);
  const submit=()=>{
    setPopup(!popup)
  }
  // supp permet de réafficher les id non supprimer gràce au filter


   
useEffect(() => {
        axios
            .get(`http://localhost:5001/users` )
            .then((response) => setUsers(response.data));
        }, []);


        const deleteUser = (userId) => {
          axios
            .delete(`http://localhost:5001/users/${userId}`)
            .then(supp(userId));
        };
  

    const supp=(userId)=>{
        const sortedUsers = users.filter(user => {
             return user.id !== userId
           })
           setUsers (sortedUsers)
     }
     // supp permet de réafficher les id non supprimer gràce au filter


   

    return (

        <div className="choice-eat">
        {/* {eat.length > 0 && <h1>☟ Se restaurer à {eat[0].city} ☟</h1>} Rendu conditionnel hors mapping    */}
        <div className="container-card">
            {users.map((user) => (<li>
                <div className="container-global">
                    
                    <h2>{user.id}</h2>
                        <h2>{user.firstname}</h2>
                        <h3>{user.lastname}</h3>
                        <h3>{user.email}</h3>
                        <h3>{user.profil_user}</h3>
                        <h3>{user.login}</h3>
                        
                        {popup? <div className="popup">
                            
                            <button   onClick={()=>deleteUser(user.id)} className='btn--red'>Valider la suppression</button>
                            <button onClick={submit}>Retour</button>
                        </div>: null}
                        <div>
                        <button onClick={submit}>Effacer un utilisateur</button>
                        </div>
                </div>
            </li>))}
        </div>
        <div>
            
        </div>
    </div >
    );
};
        export default Admin;
