import './App.css';
import React, {useEffect, useState} from 'react'
import axios from 'axios';

const App = () =>  {
const [essai, setEssai]= useState([{}])
const [test, setTest]= useState([])



console.log(test)
useEffect(() => {
    
  axios
    .get("localhost:3000/accomodations")
    .then((response) => setEssai(response.data[3]));
}, []);



const handleChange=(event)=> {
  
  setTest(event.target.value)
}

const handlesubmit=(e)=>{
  essai(e.target.value)
}
console.log(handlesubmit)

  return (
    <div className="App">
      <div className='card1'>
      <div className='card'>
          <div className='card_left'>
            <form onSubmit={handlesubmit}>
          <input type="text" placeholder={essai.adress} onChange={handleChange} />
          
          
          <button type="submit">Mise à jour</button>
          

          </form>
        
          <h1>{test.adress}</h1>
              <h1>RHR</h1>
              <h2>{essai.users}</h2>
              <h1>Ouverture de la réception :</h1>
              <h2>{essai.reception}</h2>
              <h1>Site de l'HOTEL : </h1>
              <h2>{essai.website}</h2>
              <h1>Distance de la gare: </h1>
              <h2>{essai.distance_station}</h2>
              <h1>Adresse de l'HOTEL : </h1>
              <h2>{essai.adress}</h2>
              <h1>Numéro de téléphone : </h1>
              <h2>{essai.phone_number}</h2>
          </div>
          <div className='card_right'>
            
            <h1>Accès à toute la presse en illimité sur <span>ePresse.fr</span></h1>
            <h2>{essai.e_press===1?"oui":"non"}</h2>
            <h1>Y a t-il une terrasse</h1>
            <h2>{essai.terrace===1?"oui":"non"}</h2>


           
          </div>
          </div>
      </div>
      <div className='card1'>
      <div className='card'>
          <div className='card_left'>
          <h1>{test.name_eat}</h1>
             
          </div>
          <div className='card_right'>
            
        


           
          </div>
          </div>
      </div>
    </div>
  );
}

export default App;
