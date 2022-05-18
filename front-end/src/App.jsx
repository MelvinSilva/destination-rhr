/* eslint-disable max-len */
/* eslint-disable react/jsx-no-constructed-context-values */
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import { decodeToken } from 'react-jwt';
import axios from 'axios';
import Auth from './components/auth/Auth';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/Footer';
import Header from './components/Header';
import ChoiceStation from './components/station/ChoiceStation';
import GetAccomodation from './components/tab/GetAccomodation';
import HomeStation from './components/tab/HomeStation';
import Eat from './components/tab/Eat';
import Store from './components/tab/Store';
import UpdateAccomodation from './components/tab/UpdateAccomodation';
import AuthTokenContext from './components/context/AuthTokenContext';
import NoResult from './components/NoResult';
import Admin from './components/tab/Admin';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      // route reconnect pour verifier si le token n'est pas expiré lors d'un rechargement de page //
      // nous allons chercher l'information coté serveur car il est impossible coté client        //
      .get('http://localhost:5001/users/reconnect', { withCredentials: true })
      .then((res) => {
        setUser(decodeToken(res.data));
      });
  }, []);

  return (

    <AuthTokenContext.Provider value={{ user, setUser }}>
      <div>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/administration" element={<Admin />} />
            <Route path="/" element={<Navigate to="/home" />} />

            <Route path="/home" element={<Auth />}>
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            {/* si user est different de false = user existant avec token donc tu m'affiches les composant */}
            {user && <Route path="/home/choice-station" element={<ChoiceStation />} />}
            {user && (
            <Route path="/stations/:id_station/" element={<HomeStation />}>
              <Route path="accomodation" element={<GetAccomodation />}>
                <Route path="update" element={<UpdateAccomodation />} />
              </Route>
              <Route path="eat" element={<Eat />} />
              <Route path="store" element={<Store />} />
            </Route>
            )}
            <Route path="*" element={<NoResult />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </AuthTokenContext.Provider>
  );
}

export default App;
